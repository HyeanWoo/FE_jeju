"use client";

import { Fragment } from "react";
import { useSummary } from "@/components/api/queries";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import CourseProgress from "./CourseProgress";

export default function SummaryInfoSection({ id }: { id: number }) {
  const { data: { summary: summaryData } = {} } = useSummary(id);

  const tags = summaryData?.tags?.split(",") ?? [];

  const checkLastTag = (currentIndex: number, tagLength: number) => {
    return tagLength - 1 !== currentIndex;
  };

  return (
    <section className="flex flex-col space-y-6 pb-10">
      <div className="relative -mx-5 flex">
        <ThumbnailImage
          src={summaryData?.image.imageUrl ?? ""}
          alt="temp-course-main"
          width={390}
          height={295}
          className="h-[295px] w-[390px] object-cover sm:hidden"
        />
        <ThumbnailImage
          src={summaryData?.image.imageUrl ?? ""}
          alt="temp-course-main"
          width={744}
          height={563}
          className="hidden h-[563px] w-[744px] object-cover sm:block"
        />
        {/* <Image
          // todo: 프로그램 로고가 추가된 후 변경
          src="/image/temp/temp-trending-logo.svg"
          alt="temp-trending-logo"
          width={168}
          height={40}
          className="absolute bottom-[26px] left-5"
          style={{ width: 168, height: 40 }}
        /> */}
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-title3 text-neutral-900">{summaryData?.title}</h1>
        <div className="flex space-x-1.5">
          {tags.map((tag, index) => (
            <Fragment key={tag}>
              <h5 className="text-label text-neutral-400">{tag}</h5>
              {checkLastTag(index, tags.length) && (
                <span className="tag-divider-gray" />
              )}
            </Fragment>
          ))}
        </div>
        <h3 className="text-bodyRegular text-neutral-800">
          {summaryData?.description}
        </h3>
      </div>
      <CourseProgress />
    </section>
  );
}
