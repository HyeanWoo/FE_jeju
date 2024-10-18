import { useMutation, useQueryClient } from "@tanstack/react-query";
import { certifyCourse } from "../fetch";

export const useContentCertification = (
  contentId: number,
  summaryId: number,
  userId: number,
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (certifyFormData: FormData) => {
      return certifyCourse(contentId, certifyFormData);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["summaryContentsByUser", summaryId, userId],
      });
      queryClient.invalidateQueries({
        queryKey: ["tourSummaries", userId],
      });
    },
    onError: (error) => {
      console.group("certification error");
      console.log(error);
      console.groupEnd();
    },
  });
};
