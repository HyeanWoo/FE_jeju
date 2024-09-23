"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useKakaoLogin from "../_hook/useKakaoQueries";
import { useEffect, useMemo } from "react";
import { useUpdateSignUp } from "../_hook/useUpdateSignUp";

interface KakaoLoginButtonProps {}

const KakaoLoginButton = (props: KakaoLoginButtonProps) => {
  const searchParams = useSearchParams();
  const redirect_uri =
    typeof window !== "undefined" ? `https://frog-nu.vercel.app/login` : "";

  const { push } = useRouter();

  const _code = useMemo(() => {
    return searchParams.get("code") || "";
  }, [searchParams]);

  const { loginMutation, userInfoQuery } = useKakaoLogin({
    client_id: "d189c92b8d450da84be516fa5364123b",
    redirect_uri: redirect_uri,
    code: _code,
  });

  const { mutate } = useUpdateSignUp();

  const onClick = () => {
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${"d189c92b8d450da84be516fa5364123b"}&redirect_uri=${redirect_uri}&response_type=code`;
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    if (_code) {
      loginMutation.mutate();
    }
  }, [_code]);

  useEffect(() => {
    if (userInfoQuery.data) {
      sessionStorage.setItem("userId", userInfoQuery.data?.id);
      sessionStorage.setItem(
        "nickname",
        userInfoQuery.data?.nickname || "박종찬",
      );
      mutate({
        nickname: userInfoQuery.data?.nickname || "박종찬",
        userId: userInfoQuery.data?.id,
      });
      push("/mypage");
    }
  }, [userInfoQuery.data]);

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[48px] w-[350px] items-center justify-center gap-4 rounded-lg bg-[#FEE501] px-4 py-3"
    >
      <span className="text-lg font-medium text-black">카카오로 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;
