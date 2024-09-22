import { updateSignUp } from "@/components/api/fetch";
import { useMutation } from "@tanstack/react-query";

interface SignUpResponse {
  success: boolean;
  message: string;
  data?: any;
}

interface UpdateSignUpVariables {
  nickname: string;
  userId: string;
}

export const useUpdateSignUp = () => {
  return useMutation<SignUpResponse, Error, UpdateSignUpVariables>({
    mutationKey: ["loginMutation"],
    mutationFn: ({ nickname, userId }) => updateSignUp(nickname, userId),
  });
};
