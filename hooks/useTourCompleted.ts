import { useQuery } from "@tanstack/react-query";

const useTourCompleted = (userId: number) => {
  return useQuery({
    queryKey: ["useTourCompleted"],
    queryFn: () => {},
    enabled: !!userId,
  });
};

export default useTourCompleted;
