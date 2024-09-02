"use client";

import Section from "@/components/common/Section/Section";
import { Summary } from "@/components/api/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeTrendingSummaries = ({ summaries }: { summaries: Summary[] }) => {
  const route = useRouter();

  const goToSummaryPage = (summaryId: number) => {
    route.push(`/summary/${summaryId}`);
  };

  return (
    <Section title="요즘 핫한 코스" showMore={true}>
      <Section.ItemList
        items={summaries}
        renderItem={(summary, index) => (
          <div
            key={index + summary.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
            onClick={() => goToSummaryPage(summary.id)}
          >
            <div className="relative">
              <Image
                src={summary.image.imageUrl ?? ""}
                alt={summary.title}
                width={252}
                height={140}
                className="rounded-[4px]"
              />
              <Image
                // todo: 프로그램 로고가 추가된 후 변경
                // src={summary.programLogo}
                src="/image/temp/temp-trending-logo.svg"
                alt={summary.title}
                width={168}
                height={40}
                className="absolute left-[42px] top-[50px]"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="text-bodyBold text-neutral-800">
                {summary.title}
              </h4>
              <h5 className="text-caption truncate text-neutral-400">
                {summary.description}
              </h5>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default HomeTrendingSummaries;
