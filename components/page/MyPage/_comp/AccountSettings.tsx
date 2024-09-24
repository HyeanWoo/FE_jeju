"use client";

import { useRouter } from "next/navigation";

const AccountSettings = () => {
  const router = useRouter();
  const onClickLogout = () => {
    sessionStorage.clear();
    router.push("/");
  };

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold">계정설정</h3>
      <button onClick={onClickLogout}>
        <p className="text-gray-500">로그아웃</p>
      </button>
    </div>
  );
};

export default AccountSettings;
