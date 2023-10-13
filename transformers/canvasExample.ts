import { decode, type GIF, Image } from "imagescript/mod.ts";
import { getParam, transform } from "fresh_images/mod.ts";
import { createCanvas } from "https://deno.land/x/canvas@v1.4.1/mod.ts";

export default function caption(
  img: Image | GIF,
  req: Request,
): Promise<Image | GIF> {
  return transform(img, async (img) => {
    const canvas = createCanvas(img.width, img.height);
    const ctx = canvas.getContext("2d");

    const encoded = await img.encode();

    const captionHeight = 75;

    ctx.drawImage(canvas.decodeImage(encoded), 0, 0);

    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, img.height - captionHeight, img.width, captionHeight);

    ctx.fillStyle = "white";
    ctx.font = "25px sans-serif";

    ctx.fillText(
      getParam(req, "caption") || "Hello World!",
      img.width / 2,
      (img.height - captionHeight / 2) + 5,
      400,
    );

    return await decode(
      canvas.toBuffer(),
      true,
    ) as Image;
  });
}
