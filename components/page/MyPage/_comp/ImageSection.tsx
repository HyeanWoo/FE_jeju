import Image from "next/image";

const ImageSection = ({ src, alt, overlayTitle, overlaySubtitle }: any) => (
  <div className="mb-4 flex h-[406.52px] w-[326px] flex-col gap-0 overflow-hidden rounded-lg bg-gray-200 p-8">
    <div className="relative flex-1">
      <Image
        src={src}
        fill
        style={{ objectFit: "cover" }}
        alt={alt}
        className="rounded-lg"
      />
    </div>
  </div>
);

export default ImageSection;
