import { Image } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

export const PhotoGallery = ({
  representImage,
  restImages,
}: {
  representImage?: Image;
  restImages?: Image[];
}) => {
  if (!representImage || !restImages) {
    return <div>이미지가 존재하지 않습니다.</div>;
  }

  return (
    <div className="-mx-5 flex w-[390px] flex-col space-y-[1px] sm:w-[744px]">
      <ThumbnailImage
        src={representImage?.imageUrl || "/image/image-placeholder.svg"}
        alt={representImage?.imageName ?? ""}
        width={390}
        height={195}
        className="h-[195px] w-[390px] object-cover sm:hidden"
      />
      <ThumbnailImage
        src={representImage?.imageUrl || "/image/image-placeholder.svg"}
        alt={representImage?.imageName ?? ""}
        width={744}
        height={372}
        className="hidden h-[372px] w-[744px] object-cover sm:block"
      />
      {restImages?.length > 0 && (
        <>
          <div className="flex space-x-[1px] sm:hidden">
            <ThumbnailImage
              src={restImages[0]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages[0]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] object-cover"
            />
            <ThumbnailImage
              src={restImages?.[1]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[1]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] object-cover"
            />
            <ThumbnailImage
              src={restImages?.[2]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[2]?.imageName || ""}
              width={130}
              height={100}
              className="h-[100px] w-[130px] object-cover"
            />
          </div>
          <div className="hidden space-x-[1px] sm:flex">
            <ThumbnailImage
              src={restImages[0]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages[0]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] object-cover"
            />
            <ThumbnailImage
              src={restImages?.[1]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[1]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] object-cover"
            />
            <ThumbnailImage
              src={restImages?.[2]?.imageUrl || "/image/image-placeholder.svg"}
              alt={restImages?.[2]?.imageName || ""}
              width={248}
              height={191}
              className="h-[191px] w-[248px] object-cover"
            />
          </div>
        </>
      )}
    </div>
  );
};
