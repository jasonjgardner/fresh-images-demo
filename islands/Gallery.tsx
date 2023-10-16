import FreshImage from "fresh_images/src/components/FreshImage.tsx";

export default function Gallery() {
  return (
    <div class="gallery">
      <div class="gallery__item">
        <img
          class="rounded-lg"
          src="https://fresh-images.deno.dev/img/carrots.png?fn=cool&fn=resize&rw=666"
          alt="Hotlink protection test"
        />
        <p class="gallery__caption">
          Hotlink protection test. This should only be visible on{" "}
          <a href="https://fresh-images.deno.dev">
            the Fresh Images demo page
          </a>.<br />
          <small>
            It's also an <code>&lt;img&gt;</code> tag, not a JSX component.
          </small>
        </p>
      </div>

      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=cool&amp;fn=resize&amp;rw=400"
          placeholder="/img/placeholder/carrots.jpg?fn=cool"
          alt="Custom transformer demo"
          width="400"
        />
        <p class="gallery__caption">
          This image has a placeholder. (Its placeholder is also transformed!)
        </p>
      </div>

      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=cool&amp;i=1&amp;fn=resize&amp;rw=400"
          alt="Custom transformer demo"
          width="400"
        />
        <p class="gallery__caption">
          This is an example of the custom transformation function. It has also
          been resized to 400px wide.
        </p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/desaturated/carrots.png"
          alt="Custom transformer demo"
          preload="true"
          transformations={{
            fn: "resize",
            resizeWidth: "400",
          }}
          width="400"
        />
        <p class="gallery__caption">
          This is an example of a transformer that has registered its own route.
        </p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png"
          alt="Caption example"
          transformations={[{
            fn: "caption",
            caption: "Carrots the Cat",
          }, {
            fn: "resize",
            resizeWidth: "480",
          }]}
          width="480"
        />
        <p class="gallery__caption">
          This example uses the custom <strong>caption</strong> transformation.
        </p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png"
          alt="Cropped to 100px by 100px starting at 100px by 100px. Then resized to 200px by 200px."
          transformations={[{
            fn: "crop",
            cropX: "100",
            cropY: "100",
            cropWidth: "100",
            cropHeight: "100",
          }, {
            fn: "resize",
            resizeWidth: "200",
            resizeHeight: "200",
          }]}
          width="200"
          height="200"
        />

        <p class="gallery__caption">
          This example shows multiple transformations being applied. The image
          is cropped to 100px by 100px, then resized to 200px by 200px.
        </p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=resize&rw=100"
          alt="Resized to 100px wide"
          width="100"
        />

        <p class="gallery__caption">Image resized to 100px wide</p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=resize&resizeHeight=100"
          alt="Resized to 100px tall"
          height="100"
        />
        <p class="gallery__caption">Image resized to 100px high</p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=resize&rw=100&resizeHeight=100"
          alt="Resized to 100px by 100px"
          width="100"
          height="100"
        />

        <p class="gallery__caption">Image resized to 100px by 100px</p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=rotate&rd=270"
          alt="Rotated 270 degrees"
        />
        <p class="gallery__caption">Image rotated 270°</p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=rotate&rotateDegrees=90"
          alt="Rotated 90 degrees"
        />

        <p class="gallery__caption">Image rotated 90°</p>
      </div>
      <div class="gallery__item">
        <FreshImage
          src="/img/carrots.png?fn=rotate&rotateDegrees=-45"
          alt="Rotated -45 degrees"
        />

        <p class="gallery__caption">Image rotate -45°</p>
      </div>
    </div>
  );
}
