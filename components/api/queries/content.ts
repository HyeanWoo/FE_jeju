import { useQuery } from "@tanstack/react-query";
import { ContentsResponse } from "@/components/api/types";
import {
  fetchContents,
  fetchContentsBySummaryId,
} from "@/components/api/fetch";

export const useContents = () => {
  return useQuery<ContentsResponse>({
    queryKey: ["contents"],
    queryFn: fetchContents,
  });
};

export const useSummaryContents = (summaryId: number) => {
  return useQuery<ContentsResponse>({
    queryKey: ["summaryContents", summaryId],
    queryFn: () => fetchContentsBySummaryId(summaryId),
  });
};
