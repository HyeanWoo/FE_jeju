"use client";

import Section from "@/components/common/Section/Section";
import { useRecentSummaries } from "@/components/api/queries";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import { useRouter } from "next/navigation";

const HomeLatestSummaries = () => {
  const route = useRouter();
  const { data } = useRecentSummaries();

  const summaries = data?.map((summary) => summary.summary);

  if (!summaries || summaries.length === 0) {
    return <></>;
  }

  const goToSummaryPage = (summaryId: number) => {
    route.push(`/summary/${summaryId}`);
  };

  return (
    <Section title="최신 등록된 코스">
      <Section.ItemList
        items={summaries}
        isCursor={true}
        renderItem={(summary, index) => (
          <div
            key={index + summary.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
            onClick={() => goToSummaryPage(summary.id)}
          >
            <ThumbnailImage
              src={summary?.image?.imageUrl}
              alt={summary.title}
              width={252}
              height={140}
              className="h-[140px] w-[252px] rounded-[4px] object-cover"
            />
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

export default HomeLatestSummaries;
