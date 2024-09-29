"use client";

import { useRouter, useSearchParams } from "next/navigation";
import useKakaoLogin from "../_hook/useKakaoQueries";
import { useEffect, useMemo, useState } from "react";
import { useUpdateSignUp } from "../_hook/useUpdateSignUp";
import { getUser } from "@/components/api/fetch";
import useStore from "@/components/common/store/store";

const getKakaoAuthUrl = (clientId: any, redirectUri: any) =>
  `https://kauth.kakao.com/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=code`;

function generateRandomKakaoNickname(): string {
  const adjectives = [
    "Happy",
    "Sunny",
    "Cool",
    "Smart",
    "Brave",
    "Mighty",
    "Clever",
    "Joyful",
    "Lucky",
    "Charming",
  ];
  const animals = [
    "Tiger",
    "Lion",
    "Bear",
    "Eagle",
    "Wolf",
    "Fox",
    "Dragon",
    "Panda",
    "Dolphin",
    "Shark",
  ];

  const randomAdjective =
    adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomAnimal = animals[Math.floor(Math.random() * animals.length)];

  return `${randomAdjective} ${randomAnimal}`;
}

const checkUserExists = async (id: any) => {
  try {
    const user = await getUser(id);

    return !!user;
  } catch {
    return false;
  }
};

const KakaoLoginButton = () => {
  const searchParams = useSearchParams();

  const redirectUri = useMemo(() => {
    return process.env.NEXT_PUBLIC_ENV === "development"
      ? `http://localhost:3000/login`
      : `https://travelcut.vercel.app/login`;
  }, []);

  const { push } = useRouter();
  const setUserId = useStore().setUserId;

  const [isLogin, setIsLogin] = useState(false);

  const _code = useMemo(() => searchParams.get("code") || "", [searchParams]);

  const { loginMutation, userInfoQuery } = useKakaoLogin({
    client_id: "d189c92b8d450da84be516fa5364123b",
    redirect_uri: redirectUri,
    code: _code,
  });

  const { mutate } = useUpdateSignUp();

  const handleLoginClick = () => {
    const KAKAO_AUTH_URL = getKakaoAuthUrl(
      "d189c92b8d450da84be516fa5364123b",
      redirectUri,
    );
    window.location.href = KAKAO_AUTH_URL;
  };

  useEffect(() => {
    if (_code && !isLogin) {
      setIsLogin(true);
      loginMutation.mutate();
    }
  }, [_code, loginMutation, isLogin]);

  useEffect(() => {
    const updateUserInfo = async () => {
      const { id, nickname } = userInfoQuery.data;
      sessionStorage.setItem(`/login`, id);
      setUserId(id);

      const isUser = await checkUserExists(id);

      if (isUser) {
        push("/mypage");
      } else {
        await mutate({
          nickname: nickname || generateRandomKakaoNickname(),
          userId: id,
        });
        push("/onboarding/first");
      }
    };

    if (userInfoQuery.data) {
      updateUserInfo();
    }
  }, [userInfoQuery.data, setUserId, push, mutate]);

  return (
    <button
      type="button"
      onClick={handleLoginClick}
      className="flex h-[48px] w-[350px] items-center justify-center gap-4 rounded-lg bg-[#FEE501] px-4 py-3"
    >
      <span className="text-lg font-medium text-black">카카오로 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;
