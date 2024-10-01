"use client";

import { useTourContent } from "@/components/api/queries";
import Section from "@/components/common/Section/Section";
import { otherSpots } from "@/lib/dummyData";
import Image from "next/image";

const HomeSpotsInJeju = () => {
  const { data: recommends } = useTourContent({
    lat: 33.431441,
    lng: 126.874237,
  });

  if (!recommends) {
    return <div>loading...</div>;
  }

  return (
    <section className="container flex flex-col space-y-3 pt-6">
      <div className="flex justify-between">
        <h2 className="text-heading text-neutral-900">제주스팟 모아보기</h2>
      </div>
      <div className="flex w-full space-x-3 overflow-x-auto">
        {recommends.map((course) => (
          <div
            key={course.contentid}
            className="flex w-[140px] max-w-[140px] flex-none flex-col space-y-2"
          >
            <Image
              src={course.firstimage || "/image/image-placeholder.svg"}
              alt={course.title}
              width={140}
              height={140}
              className="h-[140px] w-[140px] rounded-[4px] object-cover"
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
};

export default HomeSpotsInJeju;
