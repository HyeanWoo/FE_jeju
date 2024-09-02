"use client";

import Section from "@/components/common/Section/Section";
import { otherSpots } from "@/lib/dummyData";

const ContentSection = () => {
  return (
    <div className="pt-6">
      <Section title="제주스팟 모아보기" showMore={true}>
        <Section.ItemList
          items={otherSpots}
          renderItem={(spot) => (
            <Section.ListItem
              key={spot.placeName}
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

export default ContentSection;
