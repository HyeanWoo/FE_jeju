"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import Section from "@/components/common/Section/Section";
import { useSummaries } from "@/components/api/queries";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const HomeTrendingSummaries = () => {
  const route = useRouter();
  const { data } = useSummaries();

  const summaries = useMemo(
    () => data?.map((summary) => summary.summary) ?? [],
    [],
  );

  const goToSummaryPage = (summaryId: number) => {
    route.push(`/summary/${summaryId}`);
  };

  return (
    <Section title="요즘 핫한 코스">
      <Section.ItemList
        items={summaries}
        renderItem={(summary, index) => (
          <div
            key={index + summary.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2 hover:cursor-pointer"
            onClick={() => goToSummaryPage(summary.id)}
          >
            <div className="relative">
              <ThumbnailImage
                src={summary?.image?.imageUrl}
                alt={summary.title}
                width={252}
                height={140}
                className="h-[140px] w-[252px] rounded-[4px] object-cover"
              />
              {/* <Image
                // todo: 프로그램 로고가 추가된 후 변경
                // src={summary.programLogo}
                src="/image/temp/temp-trending-logo.svg"
                alt={summary.title}
                width={168}
                height={40}
                className="absolute left-[42px] top-[50px]"
              /> */}
            </div>
            <div className="flex flex-col space-y-1">
              <h4
                className="text-bodyBold text-neutral-800"
                dangerouslySetInnerHTML={{ __html: summary.title }}
              ></h4>
              <h5
                className="truncate text-caption text-neutral-400"
                dangerouslySetInnerHTML={{ __html: summary.description }}
              ></h5>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default HomeTrendingSummaries;
