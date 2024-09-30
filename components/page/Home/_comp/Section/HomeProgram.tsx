"use client";
import { programs } from "@/lib/dummyData";
import ImageWithOverlay from "@/components/common/Overlay/ImageWithOverlay";
import Section from "@/components/common/Section/Section";

const HomeProgram = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-neutral-500 opacity-30">
        <p className="text-7xl text-white">샘플 목록입니다.</p>
      </div>
      <Section title="방송으로 제주 코스 찾기">
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
    </div>
  );
};

export default HomeProgram;
