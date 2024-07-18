import Image from "next/image";
import {
  locations,
  otherSpots,
  programs,
  spots,
  trendingCourses,
} from "@/app/lib/dummyData";

export default function Home() {
  return (
    <div className="relative">
      {/* main container */}
      <main className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-3 px-5">
        {/* header */}
        <div className="flex h-14 justify-between">
          <Image
            src="/image/logo/logo-background.svg"
            alt="logo"
            width={162}
            height={30}
          />
          <Image
            src="/image/icon/search-line.svg"
            alt="search-btn"
            width={40}
            height={40}
          />
        </div>
        {/* content container */}
        <div className="container flex flex-col space-y-[50px]">
          {/* main program section*/}
          <section className="container relative mx-auto">
            <div>
              <Image
                src="/image/temp/temp-main-image.png"
                alt="main-image"
                width={350}
                height={400}
              />
            </div>
            {/* overlap */}
            <div className="absolute bottom-5 left-5 flex flex-col space-y-2">
              <Image
                src="/image/logo/temp-main-program-logo.svg"
                alt="temp-main-program-logo"
                width={133}
                height={37}
              />
              <h3 className="text-white">동진/다혜 커플이 걸었던 갈대밭</h3>
              <div className="flew-col flex space-x-1.5 text-sm leading-[17.5px] text-white">
                <h4 className="">설렘주의</h4>
                <span className="tag-divider"></span>
                <h4 className="">재회각</h4>
                <span className="tag-divider"></span>
                <h4 className="">가을</h4>
              </div>
            </div>
          </section>

          {/* sort by location */}
          <section className="container flex flex-col space-y-3">
            {/* heading */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold text-neutral-900">지역별</h2>
              <button className="flex items-center">
                <h5 className="text-sm leading-[17.5px] text-neutral-400">
                  전체보기
                </h5>
                <Image
                  src="/image/icon/arrow-drop-right-line.svg"
                  alt="arrow-drop-right-line"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* location list */}
            <div className="flex space-x-[12.5px] overflow-x-auto">
              {locations.map((location) => (
                <div className="flex w-[60px] max-w-[60px] flex-none flex-col space-y-3">
                  <div id="location-item-thumbnail"></div>
                  <h4 className="text-center text-xs font-semibold text-neutral-900">
                    {location.name}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          {/* course by trending */}
          <section className="container flex flex-col space-y-3">
            {/* heading */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold text-neutral-900">
                요즘 핫한 코스
              </h2>
              <button className="flex items-center">
                <h5 className="text-sm leading-[17.5px] text-neutral-400">
                  더보기
                </h5>
                <Image
                  src="/image/icon/arrow-drop-right-line.svg"
                  alt="arrow-drop-right-line"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* list */}
            <div className="flex w-full space-x-3 overflow-x-auto">
              {trendingCourses.map((course) => (
                <div className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2">
                  <div className="relative">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={252}
                      height={140}
                      className="rounded-[4px]"
                    />
                    <Image
                      src={course.programLogo}
                      alt={course.title}
                      width={168}
                      height={40}
                      className="absolute left-[42px] top-[50px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-bold text-neutral-800">
                      {course.title}
                    </h4>
                    <h5 className="text-xs text-neutral-400">
                      {course.episode}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* find by program */}
          <section className="container flex flex-col space-y-3">
            {/* heading */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold text-neutral-900">
                방송으로 제주 코스 찾기
              </h2>
              <button className="flex items-center">
                <h5 className="text-sm leading-[17.5px] text-neutral-400">
                  더보기
                </h5>
                <Image
                  src="/image/icon/arrow-drop-right-line.svg"
                  alt="arrow-drop-right-line"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* list */}
            <div className="flex w-full space-x-3 overflow-x-auto">
              {programs.map((program) => (
                <div className="relative w-[120px] max-w-[120px] flex-none">
                  <Image
                    src={program.thumbnail}
                    alt={program.title}
                    width={252}
                    height={140}
                    className="rounded-[4px]"
                  />
                  <div className="absolute inset-0 rounded-[4px] bg-gradient-to-t from-[#00000066] to-[#00000000]"></div>
                  <h4 className="absolute bottom-3 left-3 font-bold text-white">
                    {program.title}
                  </h4>
                </div>
              ))}
            </div>
          </section>

          {/* spotlight from program */}
          <section className="container flex flex-col space-y-3">
            {/* heading */}
            <h2 className="text-lg font-bold text-neutral-900">
              환승연애3에서 가장 주목받은 제주 스팟
            </h2>
            {/* content */}
            <div className="from-main-500 to-main-300 flex flex-col space-y-3 rounded-[10px] bg-gradient-to-b p-4">
              <div className="flex space-x-3">
                <Image
                  src="/image/temp/temp-program-thumbnail-1.png"
                  alt="temp-program-thumbnail-1"
                  width={96}
                  height={136}
                  className="rounded-lg"
                />
                <div className="flex w-full flex-col justify-center space-y-1">
                  <h4 className="text-lg font-bold text-white">환승연애3</h4>
                  <h5 className="text-xs font-semibold text-white">
                    2023 예능
                  </h5>
                </div>
              </div>
              <p className="text-sm font-medium text-white">
                환승연애3 방송 이후 관광 데이터 기준 가장 많은 주목을 받고 있는
                제주 핫플을 추천해 드려요.
              </p>
              <div className="flex flex-col">
                {spots.map((spot) => (
                  <div className="flex space-x-3 py-3">
                    <Image
                      src={spot.thumbnail}
                      alt={spot.spotName}
                      width={70}
                      height={70}
                      className="h-[70px] w-[70px] rounded-[4px] object-cover"
                    />
                    <div className="flex w-full items-center justify-between">
                      <div className="flex flex-col py-[3px]">
                        <h3 className="font-bold text-white">
                          {spot.spotName}
                        </h3>
                        <h5 className="text-xs font-semibold text-white">
                          {spot.placeType}
                        </h5>
                        <h4 className="text-sm font-medium text-white">
                          {spot.location}
                        </h4>
                      </div>
                      <button>
                        <Image
                          src="/image/icon/heart-3-line.svg"
                          alt="like-button"
                          width={24}
                          height={24}
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* latest course */}
          <section className="container flex flex-col space-y-3">
            {/* heading */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold text-neutral-900">
                최신 등록된 코스
              </h2>
              <button className="flex items-center">
                <h5 className="text-sm leading-[17.5px] text-neutral-400">
                  더보기
                </h5>
                <Image
                  src="/image/icon/arrow-drop-right-line.svg"
                  alt="arrow-drop-right-line"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* list */}
            <div className="flex w-full space-x-3 overflow-x-auto">
              {trendingCourses.map((course) => (
                <div className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2">
                  <div className="relative">
                    <Image
                      src={course.thumbnail}
                      alt={course.title}
                      width={252}
                      height={140}
                      className="rounded-[4px]"
                    />
                    <Image
                      src={course.programLogo}
                      alt={course.title}
                      width={168}
                      height={40}
                      className="absolute left-[42px] top-[50px]"
                    />
                  </div>
                  <div className="flex flex-col space-y-1">
                    <h4 className="font-bold text-neutral-800">
                      {course.title}
                    </h4>
                    <h5 className="text-xs text-neutral-400">
                      {course.episode}
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* spots in jeju */}
          <section className="container flex flex-col space-y-[14px]">
            {/* heading */}
            <div className="flex justify-between">
              <h2 className="text-lg font-bold text-neutral-900">
                제주스팟 모아보기
              </h2>
              <button className="flex items-center">
                <h5 className="text-sm leading-[17.5px] text-neutral-400">
                  더보기
                </h5>
                <Image
                  src="/image/icon/arrow-drop-right-line.svg"
                  alt="arrow-drop-right-line"
                  width={24}
                  height={24}
                />
              </button>
            </div>
            {/* list */}
            <div className="flex space-x-3 overflow-x-auto">
              {otherSpots.map((spot) => (
                <div className="flex flex-none flex-col space-y-2">
                  <Image
                    src={spot.thumbnail}
                    alt={spot.placeName}
                    width={140}
                    height={140}
                    className="h-[140px] w-[140px] rounded-[4px] object-cover"
                  />
                  <div className="flex flex-col space-y-1">
                    <h3 className="font-bold text-neutral-800">
                      {spot.placeName}
                    </h3>
                    <h5 className="text-xs font-semibold text-neutral-400">
                      {spot.placeType}
                    </h5>
                    <h4 className="text-sm font-medium text-neutral-700">
                      {spot.location}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <nav className="container fixed bottom-0 left-[calc((100vw-390px)/2)] mx-auto flex h-[60px] w-full max-w-[390px] justify-around border-t border-[#F0F0F0] bg-white">
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <Image src="/image/icon/home.svg" alt="home" width={28} height={28} />
          <h3 className="text-[11px]">홈</h3>
        </div>
        <div className="flex flex-col items-center justify-center space-y-0.5">
          <Image
            src="/image/icon/place.svg"
            alt="place"
            width={28}
            height={28}
          />
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
    </div>
  );
}
