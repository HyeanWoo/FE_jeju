import { useEffect, useState } from "react";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import useStore from "@/components/common/store/store";
import useContentFinish from "../_hook/useContentFinish";

const ProgressPlaceHolder = () => {
  const CompletedList = [
    { desc: "코스 진행을 시작해 보세요" },
    { desc: "코스 진행을 시작해 보세요" },
    { desc: "코스 진행을 시작해 보세요" },
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
            <p className="rounded-md py-1 text-left text-[12px] font-semibold leading-[14.4px] text-[#8D9097]">
              남은 코스
            </p>
            <p className="text-base font-bold">{item.desc}</p>
          </div>
        </div>
      ))}
    </>
  );
};

const Progress = () => {
  const [userId, setUserId] = useState<number | null>(null);
  const storeUserId = useStore().userId;

  useEffect(() => {
    if (!userId && typeof window !== "undefined") {
      const storedUserId = Number(sessionStorage?.getItem("/login"));
      setUserId(storeUserId || storedUserId);
    }
  }, [storeUserId]);

  const { data, isLoading } = useContentFinish(userId);

  return (
    <div className="space-y-4">
      {!data || isLoading || data?.length === 0 ? (
        <ProgressPlaceHolder />
      ) : (
        data?.map((item, index) => (
          <div
            key={index}
            className="opacity-1 flex h-[100px] w-[350px] items-start gap-3"
          >
            {item.imageList.map((image, imgIndex) => (
              <div key={imgIndex} className="flex">
                <ThumbnailImage
                  width={175}
                  height={100}
                  src={image.imageUrl}
                  alt="Thumbnail"
                  className="rounded-md object-cover"
                />

                <div className="flex-1 items-start">
                  <p className="rounded-md py-1 text-left text-[12px] font-semibold leading-[14.4px] text-[#8D9097]">
                    남은 코스
                  </p>
                  <p className="text-base font-bold">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Progress;
