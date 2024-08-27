"use client";

import Divider from "@/components/common/Divider";
import {
  AboutCourseSection,
  CourseHeader,
  CourseInfoSection,
  SimilarCourseSection,
} from "./_comp";
import { useSummary } from "@/components/api";

export default function CourseRoot({
  params,
}: {
  params: { courseId: string };
}) {
  const { data: { summary } = {} } = useSummary(parseInt(params.courseId));

  return (
    <div className="space-y mx-auto mb-24 flex w-full max-w-[390px] flex-col">
      <CourseHeader />
      <main className="container flex w-full flex-col px-5">
        <CourseInfoSection courseData={summary} />
        <Divider />
        <AboutCourseSection />
        <Divider />
        <SimilarCourseSection />
      </main>
    </div>
  );
}
