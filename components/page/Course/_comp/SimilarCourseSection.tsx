import { trendingCourses } from "@/lib/dummyData";
import Image from "next/image";

export default function SimilarCourseSection() {
  return (
    <section className="container flex flex-col space-y-3 pt-6">
      <div className="flex justify-between">
        <h2 className="text-lg font-bold text-neutral-900">비슷한 코스</h2>
        <button className="flex items-center">
          <h5 className="text-sm leading-[17.5px] text-neutral-400">더보기</h5>
          <Image
            src="/image/icon/arrow-drop-right-line.svg"
            alt="arrow-drop-right-line"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className="flex w-full space-x-3 overflow-x-auto">
        {trendingCourses.map((course) => (
          <div
            key={course.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
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
              <h4 className="font-bold text-neutral-800">{course.title}</h4>
              <h5 className="text-xs text-neutral-400">{course.episode}</h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
