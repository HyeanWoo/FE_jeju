"use client";
import { programs } from "@/lib/dummyData";
import ImageWithOverlay from "@/components/common/Overlay/ImageWithOverlay";
import Section from "@/components/common/Section/Section";

const HomeProgram = () => {
  return (
    <Section title="방송으로 제주 코스 찾기" showMore={true}>
      <Section.ItemList
        items={programs}
        renderItem={(program, index) => (
          <div
            key={index + program.title}
            className="relative w-[120px] max-w-[120px] flex-none"
          >
            <ImageWithOverlay
              src={program.thumbnail}
              alt={program.title}
              overlayText={program.title}
              overlayClass="bottom-3 left-3"
            />
          </div>
        )}
      />
    </Section>
  );
};

export default HomeProgram;
