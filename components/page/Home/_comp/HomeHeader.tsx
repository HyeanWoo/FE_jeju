import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="flex h-14 justify-between">
      <div className="h-full py-[9px] sm:py-[13px]">
        <Image
          src="/image/logo/logo-background.svg"
          alt="logo"
          width={162}
          height={30}
          className="h-[30px] w-[162px]"
        />
      </div>
      <div className="h-full py-3 sm:py-[14px]">
        <Image
          src="/image/icon/search-line.svg"
          alt="search-btn"
          width={24}
          height={24}
          className="h-[24px] w-[24px]"
        />
      </div>
    </div>
  );
};

export default HomeHeader;
