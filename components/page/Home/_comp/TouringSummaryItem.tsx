"use client";

import { Summary } from "@/components/api/types";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const _ = "w-[0%] w-[33%] w-[67%] w-[100%]";

export default function TouringSummaryItem({
  summary,
  certifiedContent,
  totalContent,
}: {
  summary: Summary;
  certifiedContent: number;
  totalContent: number;
}) {
  const itemWidth = document.body.clientWidth < 765 ? 350 : 704;

  const progress = Math.round((certifiedContent / totalContent) * 100);
  const progressLeft = `h-[6px] w-[${progress}%] rounded-full bg-main-500 transition-all duration-300`;

  return (
    <div className="relative">
      <ThumbnailImage
        src={summary?.image?.imageUrl}
        alt={summary.title}
        height={200}
        width={itemWidth}
        className="h-[200px] w-[350px] rounded-md object-cover sm:w-[704px]"
      />
      <div className="progress-gradient absolute left-0 top-0 z-10 h-full w-[350px] rounded-md sm:w-[704px]" />
      <div className="absolute bottom-3 left-3 z-20 flex w-[326px] flex-col space-y-3 sm:w-[680px]">
        <div className="flex flex-col space-y-1">
          <h5 className="text-caption text-neutral-100">{`남은 코스 (${certifiedContent}/${totalContent})`}</h5>
          <h4 className="text-bodyBold text-white">{summary.title}</h4>
        </div>
        <div className="flex w-full rounded-full bg-neutral-100">
          <div className={progressLeft} />
        </div>
      </div>
    </div>
  );
}
