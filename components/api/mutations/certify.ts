import { useMutation } from "@tanstack/react-query";
import { certifyCourse } from "../fetch";

export const useContentCertification = (contentId: number) => {
  return useMutation({
    mutationFn: (certifyFormData: FormData) => {
      return certifyCourse(contentId, certifyFormData);
    },
    onSuccess: (state) => {
      console.group("certification mutation success");
      console.log(state);
      console.groupEnd();
    },
    onError: (error) => {
      console.group("certification mutation error");
      console.log(error);
      console.groupEnd();
    },
  });
};
