import Image from "next/image";

const HomeHeader = () => {
  return (
    <div className="flex h-14 justify-between">
      <Image
        src="/image/logo/logo-background.svg"
        alt="logo"
        width={162}
        height={30}
        style={{ width: 162, height: 30 }}
      />
      <Image
        src="/image/icon/search-line.svg"
        alt="search-btn"
        width={40}
        height={40}
        style={{ width: 40, height: 40 }}
      />
    </div>
  );
};

export default HomeHeader;
