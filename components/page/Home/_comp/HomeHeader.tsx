"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeHeader = () => {
  const { push } = useRouter();

  const goToMyPage = () => {
    const userId = sessionStorage.getItem("userId");

    if (userId) {
      push("/mypage");
    } else {
      push("/login");
    }
  };

  return (
    <div className="flex h-14 justify-between">
      <div className="h-full py-[9px] sm:py-[13px]">
        <Image
          src="/image/logo/logo-background.svg"
          alt="logo"
          width={162}
          height={30}
          className="h-[30px] w-[162px]"
        />
      </div>
      <div className="h-full py-3 sm:py-[14px]">
        <Image
          onClick={goToMyPage}
          src="/image/icon/material-symbols-light_person.svg"
          alt="search-btn"
          width={24}
          height={24}
          className="h-[24px] w-[24px] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
