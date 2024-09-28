import Image from "next/image";
import { useMemo } from "react";
import { useSummaryContents } from "@/components/api/queries";

export default function CourseProgress({ summaryId }: { summaryId: number }) {
  const userId = Number(sessionStorage.getItem("userId"));

  const { data: { contents } = {} } = useSummaryContents(summaryId, userId);
  const contentList = contents?.map((content) => ({
    isCertified: content.isCertified,
    id: content.content.id,
  }));

  if (!contentList) {
    return <div>loading...</div>;
  }

  if (contentList.length === 0) {
    return <div>코스 정보가 없습니다.</div>;
  }

  const finishedCourseCount = useMemo(
    () => contentList?.filter((content) => content.isCertified).length ?? 0,
    [contentList],
  );
  const totalCourseCount = useMemo(
    () => contentList?.length ?? 1,
    [contentList],
  );
  const isCourseFinished = useMemo(
    () => totalCourseCount === finishedCourseCount,
    [finishedCourseCount, totalCourseCount],
  );

  const progressRatio = useMemo(
    () => Math.round((finishedCourseCount / totalCourseCount) * 100),
    [finishedCourseCount, totalCourseCount],
  );
  const progressStyle = useMemo(
    () =>
      `h-[6px] w-[${progressRatio}%] rounded-full bg-main-500 transition-all duration-300`,
    [progressRatio],
  );

  const scrollToCourse = () => {
    const headingContentId = contentList.find(
      (content) => !content.isCertified,
    )?.id;
    const courseElement = document.getElementById(
      `content-${headingContentId}`,
    );

    if (courseElement) {
      courseElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const goToAlbumPage = () => {};

  return (
    <div className="flex w-full flex-col space-y-5 rounded-md bg-neutral-50 p-4">
      <div className="flex w-full flex-col justify-between space-y-[10px]">
        <div className="flex w-full justify-between">
          <span className="text-bodyBold text-neutral-800">코스 진척도</span>
          {isCourseFinished ? (
            <span className="text-caption text-main-500">코스 완주 완료!</span>
          ) : (
            <span className="text-caption text-neutral-400">
              남은 코스{` (${finishedCourseCount}/${totalCourseCount})`}
            </span>
          )}
        </div>
        <div className="flex w-full rounded-full bg-neutral-100">
          <div className={progressStyle} />
        </div>
      </div>
      {isCourseFinished ? (
        <button
          onClick={goToAlbumPage}
          className="flex w-full justify-center space-x-1 rounded-lg border border-neutral-200 bg-white py-3"
        >
          <span className="text-bodyBold text-main-500">
            나만의 트래블컷 제작하러 가기
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
          onClick={scrollToCourse}
          className="w-full rounded-lg bg-main-500 py-3"
        >
          <span className="text-bodyBold text-white">장소 방문 인증하기</span>
        </button>
      )}
    </div>
  );
}
