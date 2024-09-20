"use client";

import { Position } from "@/components/api/types";
import useStore from "@/components/common/store/store";
import { useEffect, useMemo, useRef } from "react";

type SummaryMapOption = {
  places: Position[];
};

const DIVISOR_CONSTANT = 1000000;

export default function SummaryMap({ places }: SummaryMapOption) {
  const { isKakaoMapLoad } = useStore();
  const mapContainer = useRef<HTMLDivElement>(null);

  const center: Position = useMemo(() => {
    const positionSum = places.reduce(
      (sum, place) => ({
        lat: sum.lat + Math.floor(place.lat * DIVISOR_CONSTANT),
        lng: sum.lng + Math.floor(place.lng * DIVISOR_CONSTANT),
      }),
      { lat: 0, lng: 0 },
    );

    const divisor = places.length;

    return {
      lat: positionSum.lat / divisor / DIVISOR_CONSTANT,
      lng: positionSum.lng / divisor / DIVISOR_CONSTANT,
    };
  }, []);

  useEffect(() => {
    if (isKakaoMapLoad) {
      window.kakao.maps.load(() => {
        const container = mapContainer.current;
        const options = {
          center: new window.kakao.maps.LatLng(center.lat, center.lng),
          level: 5,
        };

        const map = new window.kakao.maps.Map(container, options);

        places.forEach((place, index) => {
          const content = `<svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <circle cx="10" cy="10" r="10" fill="#F43C60" />
          <text x="10" y="11" fill="#FFFFFF" font-size="12" font-weight="600" text-anchor="middle" dominant-baseline="middle">${index + 1}</text>
        </svg>
        `;

          const markerPosition = new window.kakao.maps.LatLng(
            place.lat,
            place.lng,
          );

          const marker = new window.kakao.maps.CustomOverlay({
            position: markerPosition,
            content,
          });

          marker.setMap(map);
        });
      });
    }
  }, [isKakaoMapLoad]);

  return (
    <div
      ref={mapContainer}
      className="h-[195px] w-[390px] sm:h-[372px] sm:w-[744px]"
    />
  );
}
