import Divider from "@/components/common/Divider";
import {
  AboutCourseSection,
  CourseHeader,
  CourseInfoSection,
  SimilarCourseSection,
} from "./_comp";

export default function CourseRoot() {
  return (
    <div className="space-y mx-auto mb-24 flex w-full max-w-[390px] flex-col">
      <CourseHeader />
      <main className="container flex w-full flex-col px-5">
        <CourseInfoSection />
        <Divider />
        <AboutCourseSection />
        <Divider />
        <SimilarCourseSection />
      </main>
    </div>
  );
}
