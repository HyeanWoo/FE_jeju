"use client";

import useStore from "@/components/common/store/store";
import UserIcon from "../image/UserIcon";
import useUser from "@/hooks/useUser";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";

const UserInfo = () => {
  const [userId, setUserId] = useState<number>(0);
  const storeUserId = useStore().userId;

  useLayoutEffect(() => {
    if (!userId && typeof window !== "undefined") {
      const storedUserId = Number(sessionStorage?.getItem("/login"));
      setUserId(storeUserId || storedUserId);
    }
  }, [storeUserId]);

  const { push } = useRouter();
  const { data, isLoading } = useUser(Number(userId));

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-[104px] w-full items-center space-x-4">
      <div className="flex h-[80px] w-full items-center rounded-lg bg-gray-200 px-3">
        <div className="flex h-[56px] w-[56px] items-center justify-center rounded-[8px] bg-white">
          <UserIcon />
        </div>
        <div className="ml-4">
          <h2 className="text-left text-[18px] font-[700] leading-[25.56px]">
            {data?.nickname || "홍길동"}
          </h2>
          <p className="text-gray-600">{`ID ${data?.id}`}</p>
        </div>
        <button
          className="ml-auto flex-shrink-0 text-left text-[14px] font-[500] leading-[17.5px] text-[#8D9097]"
          onClick={() => {
            setUserId(0);
            sessionStorage.clear();
            push("/");
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
