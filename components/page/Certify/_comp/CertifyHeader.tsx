"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SummaryHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className="flex h-14 sm:px-[18px]">
      <button onClick={goBack} className="p-3 sm:p-0 sm:py-2">
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
}
