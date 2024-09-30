import { Image } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

export const PhotoGallery = ({
  representImage,
  restImages,
  openGallery,
}: {
  representImage?: Image;
  restImages?: Image[];
  openGallery: (index: number) => void;
}) => {
  if (!representImage || !restImages) {
    return <div>이미지가 존재하지 않습니다.</div>;
  }

  const onImageClick = (index?: number) => {
    if (index !== 0 && index === undefined) {
      return;
    }

    openGallery(index);
  };

  return (
    <div className="-mx-5 flex w-[390px] flex-col space-y-[1px] sm:w-[744px]">
      <ThumbnailImage
        src={representImage?.imageUrl || "/image/image-placeholder.svg"}
        alt={representImage?.imageName ?? ""}
        width={390}
        height={195}
        className="h-[195px] w-[390px] cursor-pointer object-cover sm:hidden"
        onClick={() => onImageClick(0)}
      />
      <ThumbnailImage
        src={representImage?.imageUrl || "/image/image-placeholder.svg"}
        alt={representImage?.imageName ?? ""}
        width={744}
        height={372}
        className="hidden h-[372px] w-[744px] cursor-pointer object-cover sm:block"
        onClick={() => onImageClick(0)}
      />
      {restImages?.length > 0 && (
        <>
          <div className="flex space-x-[1px] sm:hidden">
            <ThumbnailImage
              src={restImages[0]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages[0]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[0]?.imageUrl ? 1 : undefined)
              }
            />
            <ThumbnailImage
              src={restImages?.[1]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[1]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[1]?.imageUrl ? 2 : undefined)
              }
            />
            <ThumbnailImage
              src={restImages?.[2]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[2]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[2]?.imageUrl ? 3 : undefined)
              }
            />
          </div>
          <div className="hidden space-x-[1px] sm:flex">
            <ThumbnailImage
              src={restImages[0]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages[0]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[0]?.imageUrl ? 1 : undefined)
              }
            />
            <ThumbnailImage
              src={restImages?.[1]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[1]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[1]?.imageUrl ? 2 : undefined)
              }
            />
            <ThumbnailImage
              src={restImages?.[2]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[2]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] cursor-pointer object-cover"
              onClick={() =>
                onImageClick(restImages[2]?.imageUrl ? 3 : undefined)
              }
            />
          </div>
        </>
      )}
    </div>
  );
};
