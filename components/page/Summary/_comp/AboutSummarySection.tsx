"use client";

import { Content } from "@/components/api/types";
import Image from "next/image";

export default function AboutSummarySection({
  contents,
}: {
  contents?: Content[];
}) {
  return (
    <section className="flex flex-col pb-6">
      <div className="px-5 pb-3 pt-6">
        <h2 className="text-heading text-neutral-900">코스 소개</h2>
      </div>
      <div className="relative -mx-5 pb-6">
        <Image
          src="/image/temp/temp-map-overlay.png"
          alt="temp-map-overlay"
          width={390}
          height={195}
          className="h-[195px] w-[390px] object-cover"
          style={{ width: 390, height: 195 }}
        />
        <span className="text-caption absolute inset-0 left-40 top-10 flex h-5 w-5 items-center justify-center rounded-full bg-main-500 text-white">
          1
        </span>
        <span className="text-caption absolute inset-0 left-[225px] top-[136px] flex h-5 w-5 items-center justify-center rounded-full bg-main-500 text-white">
          2
        </span>
        <div className="absolute left-[154px] top-[98px] w-[95px] rotate-[58deg] border border-dashed border-neutral-500"></div>
      </div>
      <div className="flex flex-col space-y-6 pb-6">
        {contents?.map((content, index) => (
          <div key={content.id} className="flex space-x-2">
            <div className="flex flex-col items-center space-y-2">
              <span className="text-caption flex h-[26px] w-[26px] flex-none items-center justify-center rounded-full bg-main-500 text-white">
                {index + 1}
              </span>
              <div className="h-full w-0.5 border border-neutral-100"></div>
            </div>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between">
                <div className="flex flex-col space-y-2">
                  <h3 className="text-heading">{content.title}</h3>
                  <h5 className="text-caption text-neutral-400">
                    place-type-1, place-type-2
                  </h5>
                  <h4 className="text-label w-[260px] truncate text-neutral-700">
                    {content.description}
                  </h4>
                </div>
                <button className="flex h-[38px] flex-none rounded-lg border p-[6px]">
                  <Image
                    src="/image/icon/heart-3-line-pink.svg"
                    alt="like-button"
                    width={24}
                    height={24}
                    style={{ width: 24, height: 24 }}
                  />
                </button>
              </div>
              <div className="flex space-x-2 overflow-x-auto">
                {/* todo: 콘텐트이미지 타입 추가시 작업 예정 */}
                {/* {info.gallery.map((galleryItem, index) => (
                  <Image
                    key={index + galleryItem}
                    src={galleryItem}
                    alt={galleryItem}
                    width={120}
                    height={160}
                    className="h-40 w-[120px] flex-none rounded-lg object-cover"
                    style={{ width: 120, height: 160 }}
                  />
                ))} */}
                <Image
                  src="https://via.placeholder.com/120x160?text=gallery-1"
                  alt="gallery"
                  width={120}
                  height={160}
                  className="h-40 w-[120px] flex-none rounded-lg object-cover"
                  style={{ width: 120, height: 160 }}
                />
                <Image
                  src="https://via.placeholder.com/120x160?text=gallery-2"
                  alt="gallery"
                  width={120}
                  height={160}
                  className="h-40 w-[120px] flex-none rounded-lg object-cover"
                  style={{ width: 120, height: 160 }}
                />
                <Image
                  src="https://via.placeholder.com/120x160?text=gallery-3"
                  alt="gallery"
                  width={120}
                  height={160}
                  className="h-40 w-[120px] flex-none rounded-lg object-cover"
                  style={{ width: 120, height: 160 }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="flex w-full items-center justify-center rounded-lg border bg-main-500 py-[11px]">
        <span className="text-bodyBold text-white">내 코스로 저장</span>
      </button>
    </section>
  );
}
