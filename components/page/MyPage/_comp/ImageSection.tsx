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
    <div className="rounded-lg bg-white bg-opacity-70 p-4 text-center opacity-100 shadow-md">
      <h3 className="text-lg font-semibold">{overlayTitle}</h3>
      <p>{overlaySubtitle}</p>
    </div>
  </div>
);

export default ImageSection;
