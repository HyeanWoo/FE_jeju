"use client";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import useTourFinish from "../_hook/useTourFinish";
import { useEffect, useState } from "react";

const CompletedPlaceHolder = () => {
  return (
    <div className="opacity-1 relative flex h-[100px] items-start gap-3">
      <ThumbnailImage
        width={175}
        height={100}
        src={"/image/image-placeholder.svg"}
        alt="Thumbnail"
        className="rounded-md object-cover"
      />
      <div className="progress-gradient absolute left-0 top-0 z-10 h-full w-[175px] rounded-md" />

      <div className="flex-1 items-start">
        <p className="text-base font-bold">장소 인증을 해보세요!</p>
      </div>
    </div>
  );
};

const CompletedSection = () => {
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    if (!userId && typeof window !== "undefined") {
      const storedUserId = Number(sessionStorage?.getItem("/login"));
      setUserId(storedUserId);
    }
  }, []);

  const { data, isLoading } = useTourFinish(userId);

  return (
    <div className="space-y-4">
      {!data || isLoading || data?.length === 0 ? (
        <CompletedPlaceHolder />
      ) : (
        data?.map((item, index) => (
          <div
            key={index}
            className="opacity-1 relative flex h-[100px] w-full items-start gap-3"
          >
            <ThumbnailImage
              width={175}
              height={100}
              src={item.image.imageUrl}
              alt="Thumbnail"
              className="rounded-md object-cover"
            />
            <div className="progress-gradient absolute left-0 top-0 z-10 h-full w-[175px] rounded-md" />

            <div className="flex-1 items-start">
              <p className="text-base font-bold">{item.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CompletedSection;
