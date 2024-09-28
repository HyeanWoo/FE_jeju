"use client";

import { useSummaryContents } from "@/components/api/queries";
import { useTourContent } from "@/components/api/queries";
import Image from "next/image";

export default function SimilarSummarySection({ id }: { id: number }) {
  const { data: { contents } = {} } = useSummaryContents(id);

  if (!contents) {
    return <div>loading...</div>;
  }

  if (contents.length === 0) {
    return <></>;
  }

  const selectedContent = contents[0].content;

  const { data: recommends } = useTourContent({
    lat: Number(selectedContent.latitude),
    lng: Number(selectedContent.longitude),
  });

  if (!recommends) {
    return <div>loading...</div>;
  }

  return (
    <section className="container flex flex-col space-y-3 pt-6">
      <div className="flex justify-between">
        <h2 className="text-heading text-neutral-900">추천 코스</h2>
      </div>
      <div className="flex w-full space-x-3 overflow-x-auto">
        {recommends.map((course) => (
          <div
            key={course.contentid}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
            <Image
              src={course.firstimage || "/image/image-placeholder.svg"}
              alt={course.title}
              width={252}
              height={140}
              className="h-[140px] w-[252px] rounded-[4px] object-cover"
            />
            <div className="flex flex-col space-y-1">
              <h4 className="text-bodyBold text-neutral-800">{course.title}</h4>
              <h5 className="text-caption text-neutral-400">{course.addr1}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
