"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Header = () => {
  const { push } = useRouter();

  const goBack = () => {
    push("/");
  };

  return (
    <div className="flex w-full px-2">
      <button onClick={goBack} className="p-3">
        <Image
          src="/image/icon/angle-bracket-left-black2.svg"
          alt="search-btn"
          width={24}
          height={24}
          className="h-6 w-6"
        />
      </button>
      <h1 className="py-[9.5px] text-[24px] font-bold leading-[28.64px] text-[#202020]">
        마이페이지
      </h1>
    </div>
  );
};

export default Header;
