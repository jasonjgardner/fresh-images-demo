import { defineConfig } from "$fresh/server.ts";
import { ensureDir } from "$std/fs/ensure_dir.ts";
import ImagesPlugin, {
  extendKeyMap,
  getParam,
  transform,
} from "fresh_images/mod.ts";
import { crop, resize, rotate } from "fresh_images/transformer.ts";
import type { ImagesPluginOptions } from "fresh_images/src/types.ts";
import { decode, GIF, Image } from "imagescript/mod.ts";
import caption from "./transformers/canvasExample.ts";
import { join } from "$std/path/mod.ts";

/**
 * Custom transformer example.
 * Rotate an image hue by a random number of degrees.\
 * Optionally accept a query parameter to invert the hue. (Requires extending the key map.)
 */
const myTransformer = async (img: Image | GIF, req: Request) => {
  const randomDegrees = Math.floor(Math.random() * 360);

  const invert = getParam(req, "invert", extendKeyMap({ invert: "i" }));

  if (invert) {
    img = await transform(
      img,
      (img) => Promise.resolve((img as Image).invertHue()),
    );
  }

  return transform(
    img,
    (img) => Promise.resolve((img as Image).hueShift(randomDegrees)),
  );
};

/**
 * Pre-optimize images before serving them.
 */
const myBuildFunction: ImagesPluginOptions["build"] = async ({
  realPath,
}) => {
  const targetDir = realPath ?? "./static";
  const files = Deno.readDir("./static/image");

  await ensureDir(targetDir);

  for await (const file of files) {
    if (!file.isFile) {
      continue;
    }

    const input = await Deno.readFile(`./static/image/${file.name}`);

    const output = await transform(
      await decode(input),
      (img) => Promise.resolve((img as Image).resize(Image.RESIZE_AUTO, 100)),
    );

    // Encode at lowest quality

    if (output instanceof GIF) {
      await Deno.writeFile(
        join(targetDir, file.name),
        await output.encode(30),
      );
      continue;
    }

    await Deno.writeFile(
      join(targetDir, file.name),
      await output.encodeJPEG(1),
    );
  }
};

export default defineConfig({
  plugins: [
    ImagesPlugin({
      // This creates a route, "/img", that will serve images from the "./static/image" directory.
      route: "/img",
      // Pass the transformers to "install"
      transformers: {
        resize,
        rotate,
        crop,
        // Custom transformers
        caption,
        cool: myTransformer,
        withRoute: {
          path: "/desaturated",
          handler: (img: Image | GIF) =>
            transform(
              img,
              (img) => Promise.resolve((img as Image).saturation(0.25, true)),
            ),
        },
      },
      build: myBuildFunction,
    }),
    ImagesPlugin({
      // Create a different route for the placeholder images. (Nested directory routes are currently not supported.)
      route: "/img/placeholder",
      realPath: "./static/placeholders",
      // Only specified transformers will be available on this route.
      transformers: {
        cool: myTransformer,
      },
    }),
  ],
});
