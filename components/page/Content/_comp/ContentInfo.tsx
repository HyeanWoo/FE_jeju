"use client";

import { Content } from "@/components/api/types";
import { PhotoGallery } from "./PhotoGallery";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { FullSizeImageGallery } from "@/components/shared/FullSizeImageGallery";

export default function ContentInfo({ content }: { content: Content }) {
  const representImage = content.imageList.find(
    (image) => image.representImageYn === "Y",
  );
  const restImages = content.imageList.filter(
    (image) => image.representImageYn === "N",
  );

  const router = useRouter();
  const pathname = usePathname();

  const goToCertifyPage = () => {
    router.push(`${pathname}/certify`);
  };

  const [imageIndex, setImageIndex] = useState<number>(0);
  const [isFullSizeGalleryOpen, setIsFullSizeGalleryOpen] =
    useState<boolean>(false);

  const onGalleryItemClick = (index: number) => {
    setImageIndex(index);
    setIsFullSizeGalleryOpen(true);
  };

  return (
    <div className="flex w-full flex-col">
      <PhotoGallery
        representImage={representImage}
        restImages={restImages}
        openGallery={onGalleryItemClick}
      />
      <FullSizeImageGallery
        close={() => setIsFullSizeGalleryOpen(false)}
        content={content}
        currentIndex={imageIndex}
        isOpen={isFullSizeGalleryOpen}
        setImageIndex={setImageIndex}
      />
      <div className="flex flex-col space-y-6 pb-6 pt-6 sm:pb-10">
        <div className="flex flex-col space-y-3">
          <h2
            className="text-title3 text-neutral-900"
            dangerouslySetInnerHTML={{ __html: content.title }}
          ></h2>
          <h6
            className="text-label text-neutral-400"
            dangerouslySetInnerHTML={{ __html: content.category }}
          ></h6>
          <h5
            className="text-label text-neutral-700"
            dangerouslySetInnerHTML={{ __html: content.address }}
          ></h5>
          <h6
            className="text-label text-neutral-700"
            dangerouslySetInnerHTML={{ __html: content.phone }}
          ></h6>
        </div>

        <div className="flex items-center">
          <button
            className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]"
            onClick={goToCertifyPage}
          >
            <span className="text-bodyBold text-white">이 장소 인증하기</span>
          </button>
        </div>
      </div>
    </div>
  );
}
