"use client";

import { tempCourseInfo } from "@/lib/dummyData";
import Image from "next/image";

export default function AboutCourseSection() {
  return (
    <section className="flex flex-col pb-6">
      <div className="px-5 pb-3 pt-6">
        <h2 className="font-neutral-900 text-lg font-bold">코스 소개</h2>
      </div>
      <div className="relative -mx-5 pb-6">
        <Image
          src="/image/temp/temp-map-overlay.png"
          alt="temp-map-overlay"
          width={390}
          height={195}
          className="h-[195px] w-[390px] object-cover"
        />
        <span className="absolute inset-0 left-40 top-10 flex h-5 w-5 items-center justify-center rounded-full bg-main-500 text-xs font-semibold text-white">
          1
        </span>
        <span className="absolute inset-0 left-[225px] top-[136px] flex h-5 w-5 items-center justify-center rounded-full bg-main-500 text-xs font-semibold text-white">
          2
        </span>
        <div className="absolute left-[154px] top-[98px] w-[95px] rotate-[58deg] border border-dashed border-neutral-500"></div>
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        {tempCourseInfo.map((info, index) => (
          <div key={info.location} className="flex space-x-2">
            <div className="flex flex-col items-center space-y-2">
              <span className="flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-main-500 text-xs font-semibold text-white">
                {index + 1}
              </span>
              <div className="h-full w-0.5 border border-neutral-100"></div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-lg font-bold">{info.placeName}</h3>
                  <h5 className="text-xs font-semibold text-neutral-400">
                    {info.placeType}
                  </h5>
                  <h4 className="text-sm font-medium text-neutral-700">
                    {info.location}
                  </h4>
                </div>
                <button className="flex h-[38px] flex-none rounded-lg border p-[6px]">
                  <Image
                    src="/image/icon/heart-3-line-pink.svg"
                    alt="like-button"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {info.gallery.map((galleryItem) => (
                  <Image
                    key={galleryItem}
                    src={galleryItem}
                    alt={galleryItem}
                    width={120}
                    height={160}
                    className="h-40 w-[120px] flex-none rounded-lg object-cover"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center rounded-lg border bg-main-500 py-[11px]">
        <span className="font-bold text-white">내 코스로 저장</span>
      </button>
    </section>
  );
}
