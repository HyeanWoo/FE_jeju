import { getTourImageList } from "@/components/api/fetch";
import { useQuery } from "@tanstack/react-query";

const useSummaryImages = (summaryId: string, userId: number) => {
  return useQuery({
    queryKey: ["useSummaryImages", { summaryId, userId }],
    queryFn: () => getTourImageList(userId, summaryId),
    enabled: !!(summaryId && userId),
  });
};

export default useSummaryImages;
