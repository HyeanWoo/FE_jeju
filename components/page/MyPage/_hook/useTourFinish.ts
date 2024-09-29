import { getTourFinish } from "@/components/api/fetch";
import { useQuery } from "@tanstack/react-query";

const useTourFinish = (userId: number | null) => {
  return useQuery({
    queryKey: ["useTourFinish"],
    queryFn: () => getTourFinish(userId as number),
    enabled: !!userId,
  });
};

export default useTourFinish;
