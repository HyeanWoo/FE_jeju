import { useQuery } from "@tanstack/react-query";
import {
  fetchRecentSummaries,
  fetchSummaries,
  fetchSummary,
  getTourList,
} from "@/components/api/fetch";
import { SummaryResponse, TourListResponse } from "@/components/api/types";

export const useSummary = (id: number) => {
  return useQuery<SummaryResponse>({
    queryKey: ["summary", id],
    queryFn: () => fetchSummary(id),
  });
};

export const useSummaries = () => {
  return useQuery<SummaryResponse[]>({
    queryKey: ["summaries"],
    queryFn: fetchSummaries,
  });
};

export const useTourSummaries = (userId: number) => {
  return useQuery<TourListResponse>({
    queryKey: ["tourSummaries", userId],
    queryFn: () => getTourList(userId),
    enabled: !!userId,
    refetchOnMount: "always",
  });
};

export const useRecentSummaries = () => {
  return useQuery<SummaryResponse[]>({
    queryKey: ["recentSummaries"],
    queryFn: fetchRecentSummaries,
  });
};
