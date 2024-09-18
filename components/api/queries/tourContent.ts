import { useQuery } from "@tanstack/react-query";
import { fetchTourContent } from "../fetch";
import { TourContent } from "../types/type";

export const useTourContent = (position: any) => {
  return useQuery<TourContent[]>({
    queryKey: ["TourContent", position.lat, position.lng],
    queryFn: () => fetchTourContent(position),
  });
};
