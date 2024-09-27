"use client";

import { useMemo } from "react";
import { useSummaries } from "@/components/api/queries";
import { Carousel } from "@/components/shared/Carousel";
import { useRouter } from "next/navigation";
import TouringSummaryItem from "../TouringSummaryItem";

export default function HomeTouringSummaries() {
  const { push } = useRouter();
  const { data } = useSummaries();

  const summaries = useMemo(
    () => data?.map((summary) => summary.summary) ?? [],
    [],
  );

  const touringSummaryItems = summaries.map((summary) => {
    return {
      content: <TouringSummaryItem summary={summary} />,
      onClick: () => push(`/summary/${summary.id}`),
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
