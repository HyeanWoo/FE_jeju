"use client";
import Section from "@/components/common/Section/Section";
import { locations } from "@/lib/dummyData";

const HomeLocation = () => {
  return (
    <Section title="지역별" isDetail={true}>
      <Section.ItemList
        items={locations}
        renderItem={(location) => (
          <Section.ListItem
            key={location.name}
            item={location}
            titleKey="name"
            subtitleKey="subtitle"
            imageKey="thumbnail"
          />
        )}
      />
    </Section>
  );
};

export default HomeLocation;
