"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const MyPageTabs = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState("inProgress");

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "inProgress" || tab === "completed") {
      setSelectedTab(tab);
    }
  }, [searchParams]);

  const onClick = (tab: string) => {
    setSelectedTab(tab);
    router.push(`/mypage?tab=${tab}`);
  };

  return (
    <div className="flex">
      <div className="w-full max-w-md">
        <div className="flex h-[52px] items-center gap-4">
          <button
            className={`flex h-[32px] items-center border-b-2 ${
              selectedTab === "inProgress"
                ? "border-[#F43C60] text-[#F43C60]"
                : "border-transparent bg-[var(--Neutral-Black)] text-[#000000]"
            } whitespace-nowrap`}
            onClick={() => onClick("inProgress")}
          >
            <span
              className={`font-pretendard text-[16px] font-bold leading-[24px]`}
            >
              진행중인 코스
            </span>
          </button>

          <button
            className={`flex h-[32px] items-center justify-center border-b-2 ${
              selectedTab === "completed"
                ? "border-[#F43C60] text-[#F43C60]"
                : "border-transparent bg-[var(--Neutral-Black)] text-[#000000]"
            } whitespace-nowrap`}
            onClick={() => onClick("completed")}
          >
            <span
              className={`font-pretendard text-[16px] font-bold leading-[24px]`}
            >
              인증 완료된 코스
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyPageTabs;
