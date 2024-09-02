"use client";

import { useRouter } from "next/navigation";

const ContentHeader = () => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <header className="flex items-center bg-white px-5 py-3">
      <button className="mr-3" onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M11.1004 12.4113L16.0502 17.361L14.636 18.7752L8.27197 12.4113L14.636 6.04736L16.0502 7.46157L11.1004 12.4113Z"
            fill="#F43C60"
          />
        </svg>
      </button>
    </header>
  );
};

export default ContentHeader;
