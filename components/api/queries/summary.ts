import { useQuery } from "@tanstack/react-query";
import { fetchSummaries, fetchSummary } from "@/components/api/fetch";
import { SummaryResponse } from "@/components/api/types";

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
