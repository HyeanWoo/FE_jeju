import { useQuery } from "@tanstack/react-query";
import { Content, ContentsResponse } from "@/components/api/types";
import {
  fetchContent,
  fetchContents,
  fetchContentsBySummaryId,
} from "@/components/api/fetch";

export const useContent = (id: number) => {
  return useQuery<Content>({
    queryKey: ["content", id],
    queryFn: () => fetchContent(id),
  });
};

export const useContents = () => {
  return useQuery<ContentsResponse>({
    queryKey: ["contents"],
    queryFn: fetchContents,
  });
};

export const useSummaryContents = (summaryId: number, userId?: number) => {
  return useQuery<ContentsResponse>({
    queryKey: ["summaryContents", summaryId],
    queryFn: () => fetchContentsBySummaryId(summaryId, userId),
  });
};
