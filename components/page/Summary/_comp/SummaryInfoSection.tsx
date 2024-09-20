"use client";

import Image from "next/image";
import { Fragment } from "react";
import { IMAGE_SERVER_URL } from "@/components/common/constants";
import { useSummary } from "@/components/api/queries";

export default function SummaryInfoSection({ id }: { id: number }) {
  const { data: { summary: summaryData } = {} } = useSummary(id);

  const tags = summaryData?.tags?.split(",") ?? [];

  const checkLastTag = (currentIndex: number, tagLength: number) => {
    return tagLength - 1 === currentIndex;
  };

  return (
    <section className="flex flex-col space-y-6 pb-10">
      <div className="relative -mx-5 flex">
        <Image
          src={`${IMAGE_SERVER_URL}${summaryData?.image.imageUrl ?? ""}`}
          alt="temp-course-main"
          width={390}
          height={295}
          className="h-[295px] w-[390px] object-cover sm:hidden"
          style={{ width: 390, height: 295 }}
        />
        <Image
          src={`${IMAGE_SERVER_URL}${summaryData?.image.imageUrl ?? ""}`}
          alt="temp-course-main"
          width={744}
          height={563}
          className="hidden h-[563px] w-[744px] object-cover sm:flex"
          style={{ width: 744, height: 563 }}
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
      <div className="flex space-x-3">
        <button className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border py-[11px]">
          <span className="text-bodyBold text-main-500">
            방송에 나온 다른 코스보기
          </span>
        </button>
        <button className="flex flex-none rounded-lg border p-[11px]">
          <Image
            src="/image/icon/heart-3-line-pink.svg"
            alt="like-button"
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>
    </section>
  );
}
