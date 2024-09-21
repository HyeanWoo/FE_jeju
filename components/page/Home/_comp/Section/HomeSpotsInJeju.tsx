"use client";
import Section from "@/components/common/Section/Section";
import { otherSpots } from "@/lib/dummyData";

const HomeSpotsInJeju = () => {
  return (
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
  );
};

export default HomeSpotsInJeju;
