import type { JSX } from "preact";
import IconChevronRight from "https://deno.land/x/tabler_icons_tsx@0.0.4/tsx/chevron-right.tsx";
import { asset } from "fresh_images/src/runtime.ts";

interface HeroProps {
  children?: JSX.Element[];
}

export default function Hero({ children }: HeroProps) {
  return (
    <div
      class="w-full flex px-8 py-10 min-h-[24em] justify-center items-center flex-col gap-8 bg-cover bg-center bg-no-repeat bg-gray-100 rounded-xl text-white"
      style={`background-image:linear-gradient(rgba(0, 20, 20, 0.8),rgba(0, 25, 20, 0.8)), url(${
        asset("/img/carrots.png", [{
          fn: "resize",
          resizeWidth: "800",
        }, {
          fn: "crop",
          ch: "600",
          cw: "800",
        }])
      });`}
    >
      <div class="space-y-4 text-center">
        <h1 class="text-4xl inline-block font-bold">Fresh Images</h1>
        <p class="text-xl max-w-lg text-lime-100">
          Image manipulation and optimization for Fresh.
        </p>
      </div>

      <div class="flex flex-col md:flex-row items-center">
        <a
          href="https://deno.land/x/fresh_images"
          class="block mt-4 text-green-900/80 cursor-pointer inline-flex items-center group text-lime-800 bg-white/75 backdrop-blur-md px-8 py-2 rounded-md hover:bg-yellow-50/60 font-bold shadow-lg transition-colors"
          target="_blank"
          rel="noreferrer noopener"
        >
          Install{" "}
        </a>
        <a
          href="https://deno.land/x/fresh_images/mod.ts"
          class="block mt-4 transition-colors text-lime-400 cursor-pointer inline-flex items-center group px-4 py-2 hover:text-lime-100"
          target="_blank"
          rel="noreferrer noopener"
        >
          Documentation{" "}
          <IconChevronRight
            class="inline-block w-5 h-5 transition group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </a>
      </div>

      {children}
    </div>
  );
}
