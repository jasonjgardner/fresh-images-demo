import Gallery from "../islands/Gallery.tsx";

export default function Demo() {
  return (
    <div class="px-4 py-8 mx-auto bg-[#86efac]">
      <div class="mx-auto grid grid-cols-4 grid-flow-row items-center justify-center">
        <Gallery />
      </div>
    </div>
  );
}
