"use client";
import { trendingCourses } from "@/lib/dummyData";
import ImageWithOverlay from "@/components/common/Overlay/ImageWithOverlay";
import Section from "@/components/common/Section/Section";

const HomeLatestCourses = () => {
  return (
    <Section title="최신 등록된 코스" isDetail={true}>
      <Section.ItemList
        items={trendingCourses}
        renderItem={(course) => (
          <div
            key={course.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
            <ImageWithOverlay
              src={course.thumbnail}
              alt={course.title}
              overlayText={course.title}
              overlayClass="left-[42px] top-[50px]"
            />
            <div className="flex flex-col space-y-1">
              <h4 className="text-bodyBold text-neutral-800">{course.title}</h4>
              <h5 className="text-caption text-neutral-400">
                {course.episode}
              </h5>
            </div>
          </div>
        )}
      />
    </Section>
  );
};

export default HomeLatestCourses;
