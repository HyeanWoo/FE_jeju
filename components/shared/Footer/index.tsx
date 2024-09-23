"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  const onClickMyPage = () => {
    const userId = sessionStorage.getItem("userId");

    if (userId) {
      router.push("/mypage");
    } else {
      router.push("/login");
    }
  };

  return (
    <nav className="container fixed bottom-0 left-[calc((100vw-390px)/2)] mx-auto flex h-[60px] w-full max-w-[390px] justify-around border-t border-[#F0F0F0] bg-white sm:left-[calc((100vw-744px)/2)] sm:max-w-[744px]">
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image
          src="/image/icon/home.svg"
          alt="home"
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <h3 className="text-[11px]">홈</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image
          src="/image/icon/place.svg"
          alt="place"
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <h3 className="text-[11px]">플레이스</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image
          src="/image/icon/bookmark.svg"
          alt="bookmark"
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <h3 className="text-[11px]">북마크</h3>
      </div>
      <div
        className="flex cursor-pointer flex-col items-center justify-center space-y-0.5"
        onClick={onClickMyPage}
      >
        <Image
          src="/image/icon/mypage.svg"
          alt="mypage"
          width={28}
          height={28}
          style={{ width: 28, height: 28 }}
        />
        <h3 className="text-[11px]">마이페이지</h3>
      </div>
    </nav>
  );
};

export default Footer;
