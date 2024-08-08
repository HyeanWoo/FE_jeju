import Image from "next/image";

const Footer = () => {
  return (
    <nav className="container fixed bottom-0 left-[calc((100vw-390px)/2)] mx-auto flex h-[60px] w-full max-w-[390px] justify-around border-t border-[#F0F0F0] bg-white">
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image src="/image/icon/home.svg" alt="home" width={28} height={28} />
        <h3 className="text-[11px]">홈</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image src="/image/icon/place.svg" alt="place" width={28} height={28} />
        <h3 className="text-[11px]">플레이스</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image
          src="/image/icon/bookmark.svg"
          alt="bookmark"
          width={28}
          height={28}
        />
        <h3 className="text-[11px]">북마크</h3>
      </div>
      <div className="flex flex-col items-center justify-center space-y-0.5">
        <Image
          src="/image/icon/mypage.svg"
          alt="mypage"
          width={28}
          height={28}
        />
        <h3 className="text-[11px]">마이페이지</h3>
      </div>
    </nav>
  );
};

export default Footer;
