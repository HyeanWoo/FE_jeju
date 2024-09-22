// useKakaoLogin.ts
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { putKaKaoLogin, getKakaoUserInfo } from "@/components/api/fetch";
import { KakaoTokenResponse } from "@/components/api/types";

const useKakaoLogin = ({
  client_id,
  redirect_uri,
  code,
}: {
  client_id: string;
  redirect_uri: string;
  code: string;
}) => {
  const [accessToken, setAccessToken] = useState<string>("");

  const loginMutation = useMutation<KakaoTokenResponse, Error>({
    mutationKey: ["loginMutation"],
    mutationFn: () => putKaKaoLogin(client_id, redirect_uri, code),
    onSuccess: (data: any) => {
      setAccessToken(data.access_token);
    },
  });

  const userInfoQuery = useQuery({
    queryKey: ["getKakaoUserInfo"],
    queryFn: () => getKakaoUserInfo(accessToken),
    enabled: accessToken.length > 0,
  });

  return { loginMutation, userInfoQuery, accessToken };
};

export default useKakaoLogin;
