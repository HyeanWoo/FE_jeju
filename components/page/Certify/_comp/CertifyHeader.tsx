"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SummaryHeader() {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className="flex h-12 items-center px-[18px]">
      <button onClick={goBack}>
        <Image
          src="/image/icon/angle-bracket-left.svg"
          alt="search-btn"
          width={32}
          height={32}
          style={{ width: 32, height: 32 }}
        />
      </button>
    </header>
  );
}
