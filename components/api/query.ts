import { useQuery } from "@tanstack/react-query";
import { getHealthCheck } from "./fetch";

export const useHealthCheck = () => {
  return useQuery({
    queryKey: ["healthCheck"],
    queryFn: getHealthCheck,
    retry(failCount) {
      return failCount < 1;
    },
  });
};
