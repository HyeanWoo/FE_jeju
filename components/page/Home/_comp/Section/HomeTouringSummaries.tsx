"use client";

import { Carousel } from "@/components/shared/Carousel";
import { useRouter } from "next/navigation";
import TouringSummaryItem from "../TouringSummaryItem";
import { useTourSummaries } from "@/components/api/queries/summary";
import { useEffect, useState } from "react";

export default function HomeTouringSummaries() {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionUserId = Number(sessionStorage.getItem("/login"));
      setUserId(sessionUserId);
    }
  });

  const { push } = useRouter();
  const { data: tourSummaries } = useTourSummaries(userId);

  if (!tourSummaries || tourSummaries.length === 0) {
    return <></>;
  }

  const touringSummaryItems = tourSummaries.map((summary) => {
    return {
      content: (
        <TouringSummaryItem
          summary={summary.summary}
          certifiedContent={summary.certifiedContent}
          totalContent={summary.totalContent}
        />
      ),
      onClick: () => push(`/summary/${summary.summary.id}`),
    };
  });

  return (
    <section className="container flex flex-col space-y-3">
      <div className="flex justify-between">
        <h2 className="text-heading text-neutral-900">진행 중인 코스</h2>
      </div>
      <Carousel items={touringSummaryItems} />
    </section>
  );
}
