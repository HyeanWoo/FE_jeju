"use client";
import Logo from "@/components/common/Icon/Logo";
import KakaoLoginButton from "./_comp/KaKaoLogin";

const LoginPage = () => {
  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col items-center px-5">
      <div className="mb-[268px] mt-[168.19px]">
        <Logo />
      </div>
      <div className="flex flex-col items-center gap-3">
        <div className="inline-flex h-[24px] items-center justify-center rounded-full border border-[#F43C60] px-3 text-[12px] text-[#F43C60]">
          5초만에 빠른 회원가입
        </div>
        <KakaoLoginButton />
        <div className="h-[18px] text-center text-[14px] font-medium leading-[17.5px] text-[#70747D]">
          로그인하여 더 많은 기능을 이용해보세요!
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
