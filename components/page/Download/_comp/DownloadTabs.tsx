"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const DownloadTabs = () => {
  const router = useRouter();

  const searchParams = useSearchParams();

  const [selectedTab, setSelectedTab] = useState("orange");

  useLayoutEffect(() => {
    const tab = searchParams.get("tab");
    if (tab === "mountain" || tab === "orange") {
      setSelectedTab(tab);
    }
  }, [searchParams]);

  const onClick = (tab: string) => {
    setSelectedTab(tab);

    const id = searchParams.get("id");
    router.push(`/download?id=${id}&tab=${tab}`);
  };

  return (
    <div className="flex gap-2 pb-[20px]">
      <button
        className={`rounded-full px-4 py-2 font-bold text-white ${
          selectedTab === "orange"
            ? "bg-[#F43C60]"
            : "bg-[#E5E7EB] text-[#6B7280]"
        }`}
        onClick={() => onClick("orange")}
      >
        한라봉
      </button>

      <button
        className={`rounded-full px-4 py-2 font-bold ${
          selectedTab === "mountain"
            ? "bg-[#F43C60] text-white"
            : "bg-[#E5E7EB] text-[#6B7280]"
        }`}
        onClick={() => onClick("mountain")}
      >
        오름
      </button>
    </div>
  );
};

export default DownloadTabs;
