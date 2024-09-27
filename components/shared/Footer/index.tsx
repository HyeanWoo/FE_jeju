import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mx-auto flex h-[162px] w-full max-w-[350px] flex-col items-center space-y-[10px] bg-neutral-50 pb-[17px] pt-7 sm:max-w-[704px]">
      <Image
        src="/image/logo/logo-background.svg"
        alt="logo"
        width={162}
        height={30}
        className="h-[30px] w-[162px]"
      />
      <div className="flex space-x-2">
        <p className="text-label">트래블컷 제주</p>
        <p className="text-label">|</p>
        <p className="text-label">팀 프로그 제작</p>
      </div>
      <p className="text-label text-[#86888b]">
        © 2024 관광데이터 활용 공모전
      </p>
    </footer>
  );
}
