import Image from "next/image";

type ThumbnailImageProps = {
  src: string;
  alt: string;
  width?: number | `${number}` | undefined;
  height?: number | `${number}` | undefined;
  className?: string | undefined;
};

const DEFAULT_PLACEHOLDER = "/image/image-placeholder.svg";

export default function ThumbnailImage({
  alt,
  src,
  className,
  height,
  width,
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
    />
  );
}
