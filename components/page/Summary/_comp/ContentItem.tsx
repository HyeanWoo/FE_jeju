import { Content } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContentItem({
  content,
  index,
  summaryId,
}: {
  content: Content;
  index: number;
  summaryId: number;
}) {
  const [toggle, setToggle] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const router = useRouter();

  const goToContentPage = (contentId: number) => {
    router.push(`/summary/${summaryId}/content/${contentId}`);
  };

  return (
    <div className="flex flex-col space-y-8">
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
              onClick={() => goToContentPage(content.id)}
            >
              <h3 className="text-heading">{content.title}</h3>
              <h5 className="text-caption text-neutral-400">
                {content.category}
              </h5>
              <h4 className="w-[260px] truncate text-label text-neutral-700">
                {content.description}
              </h4>
            </div>
            <button
              className="flex h-[38px] flex-none rounded-lg p-[6px]"
              onClick={() => setIsLiked((prev) => !prev)}
            >
              {isLiked ? (
                <Image
                  src="/image/icon/ph_heart-straight-fill.svg"
                  alt="like-button"
                  width={24}
                  height={24}
                  style={{ width: 24, height: 24 }}
                />
              ) : (
                <Image
                  src="/image/icon/ph_heart-straight.svg"
                  alt="like-button"
                  width={24}
                  height={24}
                  style={{ width: 24, height: 24 }}
                />
              )}
            </button>
          </div>
          <div className="flex space-x-2 overflow-x-auto">
            {content.imageList.map((imageItem) => (
              <ThumbnailImage
                key={imageItem.id}
                src={imageItem?.imageUrl}
                alt={imageItem.imageName}
                width={120}
                height={160}
                className="h-40 w-[120px] flex-none rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        {toggle ? (
          <button
            className="flex w-full justify-center space-x-2 rounded-lg border border-neutral-200 bg-white py-[11px]"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Image
              src="/image/logo/logo_xs_gray.png"
              alt="logo_xs_gray"
              width={46}
              height={24}
              className="h-6 w-[46px]"
            />
            <span className="text-bodyBold text-neutral-700">
              장소 방문 인증
            </span>
          </button>
        ) : (
          <button
            className="flex w-full justify-center space-x-2 rounded-lg border bg-main-500 py-[11px]"
            onClick={() => setToggle((prev) => !prev)}
          >
            <Image
              src="/image/logo/logo_xs_color.png"
              alt="logo_xs_color"
              width={46}
              height={24}
              className="h-6 w-[46px]"
            />
            <span className="text-bodyBold text-white">방문 완료!</span>
          </button>
        )}
      </div>
    </div>
  );
}
