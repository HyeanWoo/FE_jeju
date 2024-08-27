"use client";
import Image from "next/image";
import { spots } from "@/lib/dummyData";
import Section from "@/components/common/Section/Section";

const HomeSpotlight = () => {
  return (
    <Section title="환승연애3에서 가장 주목받은 제주 스팟" isDetail={false}>
      <div className="flex flex-col space-y-3 rounded-[10px] bg-gradient-to-b from-main-500 to-main-300 p-4">
        <div className="flex space-x-3">
          <Image
            src="/image/temp/temp-program-thumbnail-1.png"
            alt="temp-program-thumbnail-1"
            width={96}
            height={136}
            className="rounded-lg"
          />
          <div className="flex w-full flex-col justify-center space-y-1">
            <h4 className="text-heading text-white">환승연애3</h4>
            <h5 className="text-caption text-white">2023 예능</h5>
          </div>
        </div>
        <p className="text-label text-white">
          환승연애3 방송 이후 관광 데이터 기준 가장 많은 주목을 받고 있는 제주
          핫플을 추천해 드려요.
        </p>
        <div className="flex flex-col">
          {spots.map((spot) => (
            <div key={spot.spotName} className="flex space-x-3 py-3">
              <Image
                src={spot.thumbnail}
                alt={spot.spotName}
                width={70}
                height={70}
                className="h-[70px] w-[70px] rounded-[4px] object-cover"
              />
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col py-[3px]">
                  <h3 className="text-bodyBold text-white">{spot.spotName}</h3>
                  <h5 className="text-caption text-white">{spot.placeType}</h5>
                  <h4 className="text-label text-white">{spot.location}</h4>
                </div>
                <button>
                  <Image
                    src="/image/icon/heart-3-line.svg"
                    alt="like-button"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default HomeSpotlight;
