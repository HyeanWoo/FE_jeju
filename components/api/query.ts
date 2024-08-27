import { useQuery } from "@tanstack/react-query";
import { getHealthCheck, fetchSummary, fetchContents } from "./fetch";
import { SummaryResponse } from "./types";
import { ContentsResponse } from "./types/type";

export const useHealthCheck = () => {
  return useQuery({
    queryKey: ["healthCheck"],
    queryFn: getHealthCheck,
    retry(failCount) {
      return failCount < 1;
    },
  });
};

export const useSummary = (id: number) => {
  return useQuery<SummaryResponse>({
    queryKey: ["summary", id],
    queryFn: () => fetchSummary(id),
  });
};

export const useContents = () => {
  return useQuery<ContentsResponse>({
    queryKey: ["contents"],
    queryFn: fetchContents,
  });
};
