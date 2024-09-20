import { Content } from "@/components/api/types";

export default function ContentInfo({ content }: { content: Content }) {
  return (
    <>
      <img
        src="/image/temp/course_detail_1.png"
        alt="Main"
        className="w-full"
      />
      <div className="space flex">
        <img
          src="/image/temp/course_detail_2.png"
          alt="Thumbnail 1"
          className="w-1/3"
        />
        <img
          src="/image/temp/course_detail_3.png"
          alt="Thumbnail 2"
          className="w-1/3"
        />
        <img
          src="/image/temp/course_detail_4.png"
          alt="Thumbnail 3"
          className="w-1/3"
        />
      </div>

      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-3">
          <h2 className="text-title3 text-neutral-900">{content.title}</h2>
          <h6 className="text-label text-neutral-400">{content.category}</h6>
          <h5 className="text-label text-neutral-700">{content.address}</h5>
          <h6 className="text-label text-neutral-700">{content.phone}</h6>
        </div>

        <div className="flex space-x-5">
          <button className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border py-[11px]">
            <span className="text-bodyBold text-main-500">장소 공유</span>
          </button>
          <button className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]">
            <span className="text-bodyBold text-white">내 코스에 담기</span>
          </button>
        </div>
      </div>
    </>
  );
}
