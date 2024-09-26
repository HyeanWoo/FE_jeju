"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const ContentHeader = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className="flex items-center bg-white px-5 py-3">
      <button className="mr-3" onClick={goBack}>
        <Image
          src="/image/icon/angle-bracket-left-black2.svg"
          alt="search-btn"
          width={24}
          height={24}
          className="h-6 w-6 sm:hidden"
        />
        <Image
          src="/image/icon/angle-bracket-left-black2.svg"
          alt="search-btn"
          width={32}
          height={32}
          className="hidden h-8 w-8 sm:block"
        />
      </button>
    </header>
  );
};

export default ContentHeader;
