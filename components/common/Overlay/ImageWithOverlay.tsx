"use client";

import Image from "next/image";

interface ImageWithOverlayProps {
  src: string;
  alt: string;
  overlayText?: string;
  overlayClass?: string;
}

const ImageWithOverlay = ({
  src,
  alt,
  overlayText,
  overlayClass,
}: ImageWithOverlayProps) => {
  return (
    <div className="relative">
      <Image
        src={src}
        alt={alt}
        width={252}
        height={140}
        className="rounded-[4px]"
      />
      <div className={`absolute ${overlayClass}`}>
        {overlayText && <h4 className="font-bold text-white">{overlayText}</h4>}
      </div>
    </div>
  );
};

export default ImageWithOverlay;
