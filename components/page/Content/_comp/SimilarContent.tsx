"use client";

import { useTourContent } from "@/components/api/queries";
import { Content } from "@/components/api/types";
import Image from "next/image";

export default function SimilarContent({ content }: { content: Content }) {
  const { data: recommends } = useTourContent({
    lat: Number(content.latitude),
    lng: Number(content.longitude),
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
            className="flex w-[140px] max-w-[140px] flex-none flex-col space-y-2"
          >
            <Image
              src={course.firstimage}
              alt={course.title}
              width={140}
              height={140}
              className="h-[140px] w-[140px] rounded-[4px]"
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
