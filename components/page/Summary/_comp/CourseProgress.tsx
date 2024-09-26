import Image from "next/image";
import { useState } from "react";

export default function CourseProgress() {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [totalCourse, setTotalCourse] = useState(5);
  const [progress, setProgress] = useState((currentCourse / totalCourse) * 100);

  const certifyCourse = () => {
    const courseCount = currentCourse + 1;
    setCurrentCourse(courseCount);
    setProgress((courseCount / totalCourse) * 100);
  };

  const goToAlbumPage = () => {
    setCurrentCourse(0);
    setProgress(0);
  };

  const progressLeft = `h-[6px] w-[${progress}%] rounded-full bg-main-500 transition-all duration-300`;
  const _ = "w-[0%] w-[20%] w-[40%] w-[60%] w-[80%] w-[100%]";

  const isCourseFinished = totalCourse === currentCourse;

  return (
    <div className="flex w-full flex-col space-y-5 rounded-md bg-neutral-50 p-4">
      <div className="flex w-full flex-col justify-between space-y-[10px]">
        <div className="flex w-full justify-between">
          <span className="text-bodyBold text-neutral-800">코스 진척도</span>
          {isCourseFinished ? (
            <span className="text-caption text-main-500">코스 완주 완료!</span>
          ) : (
            <span className="text-caption text-neutral-400">
              남은 코스{` (${currentCourse}/${totalCourse})`}
            </span>
          )}
        </div>
        <div className="flex w-full rounded-full bg-neutral-100">
          <div className={progressLeft} />
        </div>
      </div>
      {isCourseFinished ? (
        <button
          onClick={goToAlbumPage}
          className="flex w-full justify-center space-x-1 rounded-lg border border-neutral-200 bg-white py-3"
        >
          <span className="text-bodyBold text-main-500">
            나만의 앨범 제작하러가기
          </span>
          <Image
            src="/image/icon/arrow-right-s-line.svg"
            alt="arrow-right-s-line"
            width={24}
            height={24}
            className="h-6 w-6"
          />
        </button>
      ) : (
        <button
          onClick={certifyCourse}
          className="w-full rounded-lg bg-main-500 py-3"
        >
          <span className="text-bodyBold text-white">장소 방문 인증하기</span>
        </button>
      )}
    </div>
  );
}
