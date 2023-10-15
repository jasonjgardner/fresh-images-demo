import FreshImage from "fresh_images/src/components/FreshImage.tsx";

export default function Gallery() {
  return (
    <div>
      <FreshImage
        src="/img/carrots.png?fn=cool&fn=resize&rw=400"
        placeholder="/img/placeholder/carrots.jpg?fn=cool"
        alt="Custom transformer demo"
      />
      <FreshImage
        src="/img/carrots.png?fn=cool&i=1&fn=resize&rw=400"
        alt="Custom transformer demo"
      />
      <FreshImage
        src="/desaturated/carrots.png"
        alt="Custom transformer demo"
        preload="true"
        transformations={{
          fn: "resize",
          resizeWidth: "400",
        }}
      />
      <FreshImage
        src="/img/carrots.png"
        alt="Caption example"
        transformations={{
          fn: "caption",
          caption: "Carrots the Cat",
        }}
      />
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
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&rw=100"
        alt="Resized to 100px wide"
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&resizeWidth=100"
        alt="Resized to 100px wide"
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&rh=100"
        alt="Resized to 100px tall"
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&resizeHeight=100"
        alt="Resized to 100px tall"
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&rw=100&rh=100"
        alt="Resized to 100px by 100px"
      />
      <FreshImage
        src="/img/carrots.png?fn=resize&resizeWidth=100&resizeHeight=100"
        alt="Resized to 100px by 100px"
      />
      <FreshImage
        src="/img/carrots.png?fn=rotate&rd=270"
        alt="Rotated 270 degrees"
      />
      <FreshImage
        src="/img/carrots.png?fn=rotate&rotateDegrees=90"
        alt="Rotated 90 degrees"
      />
      <FreshImage
        src="/img/carrots.png?fn=rotate&rotateDegrees=-45"
        alt="Rotated -45 degrees"
      />
    </div>
  );
}
