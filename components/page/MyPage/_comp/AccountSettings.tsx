"use client";

const AccountSettings = () => {
  const onClickLogout = () => {
    sessionStorage.clear();
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
