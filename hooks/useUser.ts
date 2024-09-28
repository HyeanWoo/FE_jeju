import { getUser } from "@/components/api/fetch";
import { useQuery } from "@tanstack/react-query";

const useUser = (userId: number) => {
  return useQuery({
    queryKey: ["getUser"],
    queryFn: () => getUser(userId),
    enabled: !!userId,
  });
};

export default useUser;
