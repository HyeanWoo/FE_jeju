import { useRouter } from "next/navigation";
import { Content } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import { useState } from "react";
import { FullSizeImageGallery } from "@/components/shared/FullSizeImageGallery";

export default function ContentItem({
  content,
  index,
  summaryId,
}: {
  content: Content & { isCertified: boolean };
  index: number;
  summaryId: number;
}) {
  const router = useRouter();

  const goToContentPage = () => {
    router.push(`/summary/${summaryId}/content/${content.id}`);
  };

  const goToCertifyPage = () => {
    router.push(`/summary/${summaryId}/content/${content.id}/certify`);
  };

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isFullSizeGalleryOpen, setIsFullSizeGalleryOpen] =
    useState<boolean>(false);

  const onGalleryItemClick = (index: number) => {
    setImageIndex(index);
    setIsFullSizeGalleryOpen(true);
  };

  return (
    <div className="flex flex-col" id={`content-${content.id}`}>
      <div className="flex space-x-2">
        <div className="flex flex-col items-center space-y-2">
          <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-main-500 text-caption text-white">
            {index + 1}
          </span>
          <div className="h-full w-0.5 border border-neutral-100"></div>
        </div>
        <div className="flex flex-grow flex-col space-y-4">
          <div className="flex justify-between">
            <div
              className="flex flex-col space-y-2 hover:cursor-pointer"
              onClick={goToContentPage}
            >
              <h3
                className="text-heading"
                dangerouslySetInnerHTML={{ __html: content.title }}
              ></h3>
              <h5 className="text-caption text-neutral-400">
                {content.category}
              </h5>
              <h4
                className="w-[260px] truncate text-label text-neutral-700 sm:w-[670px]"
                dangerouslySetInnerHTML={{ __html: content.description }}
              ></h4>
            </div>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {content.imageList.map((imageItem, index) => (
              <ThumbnailImage
                key={imageItem.id}
                src={imageItem?.imageUrl}
                alt={imageItem.imageName}
                width={120}
                height={160}
                className="h-40 w-[120px] flex-none rounded-lg object-cover"
                onClick={() => onGalleryItemClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="mt-8 flex w-full justify-center">
        {content.isCertified ? (
          <button className="flex w-full justify-center space-x-2 rounded-lg bg-neutral-50 py-3 hover:cursor-default">
            <span className="text-bodyBold text-neutral-400">방문 완료</span>
          </button>
        ) : (
          <button
            className="flex w-full justify-center space-x-2 rounded-lg bg-main-500 py-3"
            onClick={goToCertifyPage}
          >
            <span className="text-bodyBold text-white">
              이 장소 방문 인증하기
            </span>
          </button>
        )}
      </div>
      <FullSizeImageGallery
        content={content}
        currentIndex={imageIndex}
        close={() => setIsFullSizeGalleryOpen(false)}
        isOpen={isFullSizeGalleryOpen}
        setImageIndex={setImageIndex}
      />
    </div>
  );
}
