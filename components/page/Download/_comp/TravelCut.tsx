"use client"; // 클라이언트 사이드 전용 컴포넌트로 지정

import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { forwardRef, useEffect, useState } from "react";
import orangeImg from "../image/Orange.png";
import mountainImg from "../image/Mountain.png";
import useSummaryImages from "../_hook/useSummaryImages";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const POSITION: { [key: number]: [string, string] } = {
  0: ["top-[40px]", "left-[11.38px]"],
  1: ["top-[130.88px]", "left-[11.38px]"],
  2: ["top-[220.27px]", "left-[11.38px]"],
};

interface TravelCutProps {}

const TravelCut = forwardRef<HTMLDivElement, TravelCutProps>((_, ref) => {
  const searchParams = useSearchParams();
  const summaryId = searchParams.get("id");
  const tab = searchParams.get("tab");
  const [userId, setUserId] = useState<string | null>(null);

  const { data, error, isLoading } = useSummaryImages(
    summaryId || "",
    userId ? Number(userId) : 0,
  );

  useEffect(() => {
    const storedUserId = sessionStorage.getItem("/login");
    setUserId(storedUserId);
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading images.</div>;
  }

  return (
    <div className="relative" ref={ref}>
      {data?.map((item, index) => {
        const positionClasses = POSITION[index] || [
          "top-[40.5px]",
          "left-[11.4px]",
        ];
        return (
          <ThumbnailImage
            key={item.id || index}
            className={`absolute ${positionClasses[0]} ${positionClasses[1]} z-[-1] h-[85.76px] w-[134px] object-fill`}
            src={item.imageUrl}
            alt={item.imageName}
            width={134}
            height={86}
          />
        );
      })}

      <Image
        className="pb-[40px]"
        width={154}
        height={425}
        src={tab === "orange" ? orangeImg : mountainImg}
        alt="Download Tab Image"
      />
    </div>
  );
});

TravelCut.displayName = "TravelCut";

export default TravelCut;
