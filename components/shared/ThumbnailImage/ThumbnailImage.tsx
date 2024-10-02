import Image from "next/image";

type ThumbnailImageProps = {
  src: string;
  alt: string;
  width?: number | `${number}`;
  height?: number | `${number}`;
  className?: string;
  sizes?: string;
  onClick?: () => void;
  fill?: boolean;
  objectFit?: string;
};

const DEFAULT_PLACEHOLDER = "/image/image-placeholder.svg";

export default function ThumbnailImage({
  alt,
  src,
  className,
  height,
  width,
  sizes,
  onClick,
  fill,
  objectFit,
}: ThumbnailImageProps) {
  const imageUrl =
    src === DEFAULT_PLACEHOLDER
      ? DEFAULT_PLACEHOLDER
      : `${process.env.NEXT_PUBLIC_IMAGE_SERVER_URL}${src}`;
  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      sizes={sizes}
      onClick={onClick}
      fill={fill}
      objectFit={objectFit}
    />
  );
}
