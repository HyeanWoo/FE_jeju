import { useState } from "react";

export default function CourseProgress() {
  const [currentCourse, setCurrentCourse] = useState(0);
  const [totalCourse, setTotalCourse] = useState(5);
  const [progress, setProgress] = useState((currentCourse / totalCourse) * 100);

  const certifyCourse = () => {
    const courseCount = currentCourse + 1;

    if (courseCount > totalCourse) {
      setCurrentCourse(0);
      setProgress(0);
      return;
    }

    setCurrentCourse(courseCount);
    setProgress((courseCount / totalCourse) * 100);
  };

  const progressLeft = `h-[6px] w-[${progress}%] rounded-full bg-main-500`;
  const _ = "w-[20%] w-[40%] w-[60%] w-[80%]";

  return (
    <div className="flex w-full flex-col space-y-5 rounded-md bg-neutral-50 p-4">
      <div className="flex w-full flex-col justify-between space-y-[10px]">
        <div className="flex w-full justify-between">
          <span className="text-bodyBold text-neutral-800">코스 진척도</span>
          <span className="text-caption text-neutral-400">
            남은 코스{` (${currentCourse}/${totalCourse})`}
          </span>
        </div>
        <div className="flex w-full rounded-full bg-neutral-100">
          <div className={progressLeft} />
        </div>
      </div>
      <button
        onClick={certifyCourse}
        className="w-full rounded-lg bg-main-500 py-3"
      >
        <span className="text-bodyBold text-white">장소 방문 인증하기</span>
      </button>
    </div>
  );
}
