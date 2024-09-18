"use client";

import React, { useEffect } from "react";

const KakaoMap = () => {
  // const mapContainer = useRef(null);

  useEffect(() => {
    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=d189c92b8d450da84be516fa5364123b&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      // @ts-ignore
      window.kakao.maps.load(() => {
        var container = document.getElementById("map");
        var options = {
          // @ts-ignore
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 3,
        };
        // @ts-ignore
        var map = new window.kakao.maps.Map(container, options);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, []);

  return <div id="map" style={{ width: 390, height: 195 }}></div>;
};

export default KakaoMap;
