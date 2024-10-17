import { useEffect, useState } from "react";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";
import useStore from "@/components/common/store/store";
import { useTourSummaries } from "@/components/api/queries";

const ProgressPlaceHolder = () => {
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
        <p className="text-base font-bold">코스 진행을 시작해 보세요!</p>
      </div>
    </div>
  );
};

const Progress = () => {
  const [userId, setUserId] = useState<number>(0);

  useEffect(() => {
    if (!userId && typeof window !== "undefined") {
      const storedUserId = Number(sessionStorage?.getItem("/email"));
      setUserId(storedUserId);
    }
  }, []);

  const { data, isLoading } = useTourSummaries(userId);

  return (
    <div className="space-y-4">
      {!data || isLoading || data?.length === 0 ? (
        <ProgressPlaceHolder />
      ) : (
        data?.map((item, index) => (
          <div
            key={index}
            className="opacity-1 flex h-[100px] w-full items-start gap-3"
          >
            <div className="relative flex">
              <ThumbnailImage
                width={175}
                height={100}
                src={item.summary.image.imageUrl}
                alt="Thumbnail"
                className="rounded-md object-cover"
              />
              <div className="progress-gradient absolute left-0 top-0 z-10 h-full w-[175px] rounded-md" />
              <div className="absolute bottom-3 left-3 z-20 flex w-[151px] rounded-full bg-neutral-100">
                <div
                  className={`h-[6px] w-[${Math.round((item.certifiedContent / item.totalContent) * 100)}%] rounded-full bg-main-500 transition-all duration-300`}
                />
              </div>
            </div>

            <div className="flex-1 items-start">
              <p className="rounded-md py-1 text-left text-[12px] font-semibold leading-[14.4px] text-[#8D9097]">
                {`남은 코스 (${item.certifiedContent}/${item.totalContent})`}
              </p>
              <p className="text-base font-bold">{item.summary.description}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Progress;
