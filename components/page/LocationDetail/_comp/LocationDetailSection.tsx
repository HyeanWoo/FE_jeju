"use client";
import Section from "@/components/common/Section/Section";
import { otherSpots } from "@/lib/dummyData";

const LocationDetailSection = () => {
  return (
    <div className="pt-6">
      <Section title="제주스팟 모아보기" isDetail={true}>
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

export default LocationDetailSection;
