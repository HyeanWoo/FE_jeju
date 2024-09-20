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
        <button className="flex items-center">
          <h5 className="text-sm leading-[17.5px] text-neutral-400">더보기</h5>
          <Image
            src="/image/icon/arrow-drop-right-line.svg"
            alt="arrow-drop-right-line"
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>
      <div className="flex w-full space-x-3 overflow-x-auto">
        {recommends.map((course) => (
          <div
            key={course.contentid}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
            <Image
              src={course.firstimage}
              alt={course.title}
              width={252}
              height={140}
              className="rounded-[4px]"
              style={{ width: 252, height: 140 }}
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
