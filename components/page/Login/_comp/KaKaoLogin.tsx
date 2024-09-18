"use client";
interface KakaoLoginButtonProps {}

const KakaoLoginButton = (props: KakaoLoginButtonProps) => {
  const onClick = () => {};

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[48px] w-[350px] items-center justify-center gap-4 rounded-lg bg-[#FEE501] px-4 py-3"
    >
      <span className="text-lg font-medium text-black">카카오로 로그인</span>
    </button>
  );
};

export default KakaoLoginButton;
