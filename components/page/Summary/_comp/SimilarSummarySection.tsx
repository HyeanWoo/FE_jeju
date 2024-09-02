import { trendingCourses } from "@/lib/dummyData";
import Image from "next/image";

export default function SimilarSummarySection() {
  return (
    <section className="container flex flex-col space-y-3 pt-6">
      <div className="flex justify-between">
        <h2 className="text-heading text-neutral-900">비슷한 코스</h2>
        <button className="flex items-center">
          <h5 className="text-sm leading-[17.5px] text-neutral-400">더보기</h5>
          <Image
            src="/image/icon/arrow-drop-right-line.svg"
            alt="arrow-drop-right-line"
            width={24}
            height={24}
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>
      <div className="flex w-full space-x-3 overflow-x-auto">
        {trendingCourses.map((summary, index) => (
          <div
            key={index + summary.title}
            className="flex w-[252px] max-w-[252px] flex-none flex-col space-y-2"
          >
            <div className="relative">
              <Image
                src={summary.thumbnail}
                alt={summary.title}
                width={252}
                height={140}
                className="rounded-[4px]"
                style={{ width: 252, height: 140 }}
              />
              <Image
                src={summary.programLogo}
                alt={summary.title}
                width={168}
                height={40}
                className="absolute left-[42px] top-[50px]"
                style={{ width: 168, height: 40 }}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <h4 className="text-bodyBold text-neutral-800">
                {summary.title}
              </h4>
              <h5 className="text-caption text-neutral-400">
                {summary.episode}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
