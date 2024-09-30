"use client";
import Section from "@/components/common/Section/Section";
import { otherSpots } from "@/lib/dummyData";

const HomeSpotsInJeju = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-center bg-neutral-500 opacity-30">
        <p className="text-7xl text-white">샘플 목록입니다.</p>
      </div>
      <Section title="제주스팟 모아보기">
        <Section.ItemList
          items={otherSpots}
          renderItem={(spot, index) => (
            <Section.ListItem
              key={index + spot.placeName}
              item={spot}
              titleKey="placeName"
              subtitleKey="placeType"
              imageKey="thumbnail"
            />
          )}
        />
      </Section>
    </div>
  );
};

export default HomeSpotsInJeju;
