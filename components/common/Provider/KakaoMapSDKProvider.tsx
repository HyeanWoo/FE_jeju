"use client";

import React, { ReactNode, useEffect } from "react";
import useStore from "../store/store";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function KakaoMap({ children }: { children: ReactNode }) {
  const { setKakaoMapLoadTrue } = useStore();

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=18d0109adb56039bb3c2eed9d657a9f5&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      setKakaoMapLoadTrue();
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return <>{children}</>;
}
