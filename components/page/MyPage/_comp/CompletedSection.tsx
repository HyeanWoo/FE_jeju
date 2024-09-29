"use client";
import useStore from "@/components/common/store/store";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import useTourFinish from "../_hook/useTourFinish";
import { useEffect, useState } from "react";

const CompletedPlaceHolder = () => {
  const CompletedList = [
    { desc: "장소 인증을 해보세요" },
    { desc: "장소 인증을 해보세요" },
    { desc: "장소 인증을 해보세요" },
    { desc: "장소 인증을 해보세요" },
  ];
  return (
    <>
      {CompletedList.map((item, index) => (
        <div
          key={index}
          className="opacity-1 flex h-[100px] w-[350px] items-start gap-3"
        >
          <ThumbnailImage
            width={175}
            height={100}
            src={"/image/image-placeholder.svg"}
            alt="Thumbnail"
            className="rounded-md object-cover"
          />

          <div className="flex-1 items-start">
            <p className="text-base font-bold">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const CompletedSection = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const storeUserId = useStore().userId;

  useEffect(() => {
    if (!userId && typeof window !== "undefined") {
      const storedUserId = Number(sessionStorage?.getItem("/login"));
      setUserId(storeUserId || storedUserId);
    }
  }, [storeUserId]);

  const { data, isLoading } = useTourFinish(userId);

  console.log("data", data);

  return (
    <div className="space-y-4">
      {!data || isLoading || data?.length === 0 ? (
        <CompletedPlaceHolder />
      ) : (
        data?.map((item, index) => (
          <div
            key={index}
            className="opacity-1 flex h-[100px] w-[350px] items-start gap-3"
          >
            <ThumbnailImage
              width={175}
              height={100}
              src={item.image.imageUrl}
              alt="Thumbnail"
              className="rounded-md object-cover"
            />

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
