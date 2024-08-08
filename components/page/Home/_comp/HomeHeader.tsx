"use client";

import { useHealthCheck } from "@/components/api/query";
import Image from "next/image";

const HomeHeader = () => {
  const { isSuccess } = useHealthCheck();

  return (
    <div className="flex h-14 justify-between">
      <Image
        src="/image/logo/logo-background.svg"
        alt="logo"
        width={162}
        height={30}
      />
      <Image
        src={
          isSuccess
            ? "/image/icon/pink_search_icon.svg"
            : "/image/icon/search-line.svg"
        }
        alt="search-btn"
        width={40}
        height={40}
      />
    </div>
  );
};

export default HomeHeader;
