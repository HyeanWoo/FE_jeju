"use client";

import { useSummaryContents } from "@/components/api/queries";
import { Position } from "@/components/api/types";
import SummaryMap from "./SummaryMap";
import ContentItem from "./ContentItem";

export default function AboutSummarySection({ id }: { id: number }) {
  const { data: { contents } = {} } = useSummaryContents(id);

  if (!contents) {
    return <div>loading...</div>;
  }

  if (contents.length === 0) {
    return <div>코스 정보가 없습니다</div>;
  }

  const places: Position[] = contents?.map((content) => ({
    lat: Number(content.latitude),
    lng: Number(content.longitude),
  }));

  return (
    <section className="flex flex-col pb-6">
      <div className="px-5 pb-3 pt-6">
        <h2 className="text-heading text-neutral-900">코스 소개</h2>
      </div>
      <div className="-mx-5 pb-6">
        <SummaryMap places={places} />
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        {contents?.map((content, index) => (
          <ContentItem
            key={content.id}
            content={content}
            index={index}
            summaryId={id}
          />
        ))}
      </div>
    </section>
  );
}
