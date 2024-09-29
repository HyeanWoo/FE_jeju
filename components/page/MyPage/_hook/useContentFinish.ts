import { getSummaryFinish } from "@/components/api/fetch";
import { useQuery } from "@tanstack/react-query";

const useContentFinish = (userId: number | null) => {
  return useQuery({
    queryKey: ["useTourFinish"],
    queryFn: () => getSummaryFinish(userId as number),
    enabled: !!userId,
  });
};

export default useContentFinish;
