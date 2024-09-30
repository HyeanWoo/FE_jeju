"use client";

import { useSummaryContentsByUser } from "@/components/api/queries";
import { Position } from "@/components/api/types";
import SummaryMap from "./SummaryMap";
import ContentItem from "./ContentItem";
import { useEffect, useState } from "react";

export default function AboutSummarySection({ id }: { id: number }) {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionUserId = Number(sessionStorage.getItem("/login"));
      setUserId(sessionUserId);
    }
  });

  const { data: { contents } = {} } = useSummaryContentsByUser(id, userId);

  const contentList = contents?.map((content) => ({
    ...content.content,
    isCertified: content.isCertified,
  }));

  if (!contentList) {
    return <div>loading...</div>;
  }

  if (contentList.length === 0) {
    return <div>코스 정보가 없습니다</div>;
  }

  const places: Position[] = contentList?.map((content) => ({
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
        {contentList?.map((content, index) => (
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
