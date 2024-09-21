"use client";

import Image from "next/image";
import { useSummaryContents } from "@/components/api/queries";
import { Position } from "@/components/api/types";
import SummaryMap from "./SummaryMap";
import { useRouter } from "next/navigation";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

export default function AboutSummarySection({ id }: { id: number }) {
  const router = useRouter();

  const goToContentPage = (contentId: number) => {
    router.push(`/summary/${id}/content/${contentId}`);
  };

  const { data: { contents } = {} } = useSummaryContents(id);

  if (!contents) {
    return <div>loading...</div>;
  }

  if (contents.length === 0) {
    return <div>코스 정보가 없습니다</div>;
  }

  const places: Position[] = contents?.map((content) => ({
    lat: Number(content.latitude),
    lng: Number(content.longitude),
  }));

  return (
    <section className="flex flex-col pb-6">
      <div className="px-5 pb-3 pt-6">
        <h2 className="text-heading text-neutral-900">코스 소개</h2>
      </div>
      <div className="-mx-5 pb-6">
        <SummaryMap places={places} />
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        {contents?.map((content, index) => (
          <div key={content.id} className="flex space-x-2">
            <div className="flex flex-col items-center space-y-2">
              <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-main-500 text-caption text-white">
                {index + 1}
              </span>
              <div className="h-full w-0.5 border border-neutral-100"></div>
            </div>
            <div className="flex flex-grow flex-col space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <h3
                    className="text-heading hover:cursor-pointer"
                    onClick={() => goToContentPage(content.id)}
                  >
                    {content.title}
                  </h3>
                  <h5 className="text-caption text-neutral-400">
                    {content.category}
                  </h5>
                  <h4 className="w-[260px] truncate text-label text-neutral-700">
                    {content.description}
                  </h4>
                </div>
                <button className="flex h-[38px] flex-none rounded-lg border p-[6px]">
                  <Image
                    src="/image/icon/heart-3-line-pink.svg"
                    alt="like-button"
                    width={24}
                    height={24}
                    style={{ width: 24, height: 24 }}
                  />
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
        ))}
      </div>
      <button className="flex w-full items-center justify-center rounded-lg border bg-main-500 py-[11px]">
        <span className="text-bodyBold text-white">내 코스로 저장</span>
      </button>
    </section>
  );
}
