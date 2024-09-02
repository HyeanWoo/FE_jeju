"use client";
import { trendingCourses } from "@/lib/dummyData";
import ImageWithOverlay from "@/components/common/Overlay/ImageWithOverlay";
import Section from "@/components/common/Section/Section";

const HomeLatestSummaries = () => {
  return (
    <Section title="최신 등록된 코스" showMore={true}>
      <Section.ItemList
        items={trendingCourses}
        renderItem={(summary, index) => (
          <div
            key={index + summary.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
            <ImageWithOverlay
              src={summary.thumbnail}
              alt={summary.title}
              overlayText={summary.title}
              overlayClass="left-[42px] top-[50px]"
            />
            <div className="flex flex-col space-y-1">
              <h4 className="text-bodyBold text-neutral-800">
                {summary.title}
              </h4>
              <h5 className="text-caption text-neutral-400">
                {summary.episode}
              </h5>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default HomeLatestSummaries;
