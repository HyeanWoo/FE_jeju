import Image from "next/image";
import { Summary } from "@/components/api/types";

export default function CourseInfoSection({
  courseData,
}: {
  courseData?: Summary;
}) {
  return (
    <section className="flex flex-col space-y-6 pb-10">
      <div className="relative -mx-5 flex">
        <Image
          src="/image/temp/temp-course-main.png"
          alt="temp-course-main"
          width={390}
          height={295}
          className="h-[295px] w-[390px] object-cover"
        />
        <Image
          src="/image/temp/temp-trending-logo.svg"
          alt="temp-trending-logo"
          width={168}
          height={40}
          className="absolute bottom-[26px] left-5"
        />
      </div>
      <div className="flex flex-col space-y-3">
        <h1 className="text-title3 text-neutral-900">{courseData?.title}</h1>
        <div className="flex space-x-1.5">
          <h5 className="text-label text-neutral-400">차분한</h5>
          <span className="tag-divider-gray" />
          <h5 className="text-label text-neutral-400">이색적인</h5>
          <span className="tag-divider-gray" />
          <h5 className="text-label text-neutral-400">먹방</h5>
        </div>
        <h3 className="text-bodyRegular text-neutral-800">
          {courseData?.description}
        </h3>
      </div>
      <div className="flex space-x-3">
        <button className="flex w-[290px] shrink-0 items-center justify-center rounded-lg border py-[11px]">
          <span className="text-bodyBold text-main-500">
            방송에 나온 다른 코스보기
          </span>
        </button>
        <button className="flex flex-none rounded-lg border p-[11px]">
          <Image
            src="/image/icon/heart-3-line-pink.svg"
            alt="like-button"
            width={24}
            height={24}
          />
        </button>
      </div>
      <select name="episode" id="episode-select" className="h-10 bg-neutral-50">
        <option value="episode1">1화</option>
        <option value="episode2">2화</option>
        <option value="episode3">3화</option>
        <option value="episode4">4화</option>
        <option value="episode5">5화</option>
      </select>
    </section>
  );
}
