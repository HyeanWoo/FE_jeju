"use client";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import Progress from "./Progress";
import CompletedSection from "./CompletedSection";

const TabContents = () => {
  const searchParams = useSearchParams();

  const tabValue = useMemo(() => {
    return searchParams.get("tab") || "inProgress";
  }, [searchParams]);

  return (
    <div className="pt-[20px]">
      {tabValue === "inProgress" ? <Progress /> : <CompletedSection />}
    </div>
  );
};

export default TabContents;
