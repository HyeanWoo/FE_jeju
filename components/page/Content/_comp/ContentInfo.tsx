import { Content, Image } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

export default function ContentInfo({ content }: { content: Content }) {
  const representImage = content.imageList.find(
    (image) => image.representImageYn === "Y",
  );
  const restImages = content.imageList.filter(
    (image) => image.representImageYn === "N",
  );

  return (
    <div className="flex w-full flex-col">
      <PhotoGallery representImage={representImage} restImages={restImages} />
      <div className="flex flex-col space-y-6 pb-6 pt-6 sm:pb-10">
        <div className="flex flex-col space-y-3">
          <h2 className="text-title3 text-neutral-900">{content.title}</h2>
          <h6 className="text-label text-neutral-400">{content.category}</h6>
          <h5 className="text-label text-neutral-700">{content.address}</h5>
          <h6 className="text-label text-neutral-700">{content.phone}</h6>
        </div>

        <div className="flex items-center">
          <button className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]">
            <span className="text-bodyBold text-white">이 장소 인증하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}

const PhotoGallery = ({
  representImage,
  restImages,
}: {
  representImage?: Image;
  restImages?: Image[];
}) => {
  if (!representImage || !restImages) {
    return <div>이미지가 존재하지 않습니다.</div>;
  }

  console.log(restImages?.[1]?.imageUrl);

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
