import FreshImage from "fresh_images/src/components/FreshImage.tsx";
import Gallery from "../islands/Gallery.tsx";
import Hero from "../components/Hero.tsx";

export default function Demo() {
  return (
    <div class="flex flex-col space-y-4 p-4 mx-auto">
      <Hero />
      <div class="bg-gray-50/50 border border-gray-300 p-4 pt-2.5 rounded-lg">
        <div class="flex flex-wrap items-center justify-between mb-2">
          <h2 class="text-2xl font-bold">Examples</h2>

          <p class="text-sm text-gray-800 font-sans">
            Featuring Carrots the Cat!
          </p>
        </div>

        <Gallery />

        <div class="container mx-auto text-center">
          <p class="text-white text-sm font-sans mt-2 p-2 rounded-lg bg-gray-900/80 border border-gray-950">
            Psst, these images may have been served from a cache! Look for the
            {" "}
            <code class="text-xs bg-gray-50/50 rounded-md text-black p-0.5">
              x-fresh-image-cache-hit
            </code>{" "}
            and{" "}
            <code class="text-xs bg-gray-50/50 rounded-md text-black p-0.5">
              x-fresh-image-kv-hit
            </code>{" "}
            headers in your browser's developer tools.
          </p>
        </div>
      </div>
      <footer>
        <p>
          <a
            href="https://github.com/jasonjgardner/fresh-images-demo"
            class="text-black/50 hover:text-black/75"
            target="_blank"
            rel="noreferrer noopener"
          >
            View source
          </a>
        </p>
      </footer>
    </div>
  );
}
