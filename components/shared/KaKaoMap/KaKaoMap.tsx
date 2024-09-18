"use client";
import React, { useEffect, useRef } from "react";

const KakaoMap = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) {
      const options = {
        // @ts-ignore
        center: new kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };
      // @ts-ignore
      new kakao.maps.Map(mapContainer.current, options);
    }
  }, []);

  return <div ref={mapContainer} style={{ width: 390, height: 195 }}></div>;
};

export default KakaoMap;
