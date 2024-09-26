import Image from "next/image";
import { ChangeEvent, RefObject } from "react";

export default function BeforeUploadFlow({
  onFileChange,
  inputRef,
}: {
  onFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  inputRef: RefObject<HTMLInputElement>;
}) {
  const choosePhoto = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <main className="container flex w-full flex-col px-5">
      <div className="flex flex-col space-y-1">
        <h2 className="text-title3 text-neutral-900">
          다녀온 장소를 인증해주세요!
        </h2>
        <h4 className="text-bodyRegular text-neutral-700">
          장소에서 찍은 소중한 사진을 업로드해주세요.
        </h4>
      </div>
      <div className="flex flex-col space-y-3 py-[84px]">
        <h3 className="text-heading text-neutral-700">
          장소를 인증하면 이런게 좋아요
        </h3>
        <div className="flex space-x-3 sm:hidden">
          <Image
            src="/image/certify_example_1.png"
            alt="certify_example_1"
            width={169}
            height={240}
            className="h-[240px] w-[169px] object-cover"
          />
          <Image
            src="/image/certify_example_2.png"
            alt="certify_example_2"
            width={169}
            height={240}
            className="h-[240px] w-[169px] object-cover"
          />
        </div>
        <div className="hidden space-x-3 sm:flex">
          <Image
            src="/image/certify_example_1.png"
            alt="certify_example_1"
            width={366}
            height={372}
            className="h-[372px] w-[366px] object-cover"
          />
          <Image
            src="/image/certify_example_2.png"
            alt="certify_example_2"
            width={366}
            height={372}
            className="h-[372px] w-[366px] object-cover"
          />
        </div>
        <ul className="list-disc space-y-1 pl-[21px] text-label text-neutral-700">
          <li>
            다녀간 코스를 모두 인증하면 트래블컷만의 특별한 제주여행 프레임을
            담아 사진을 선물해 드려요.
          </li>
          <li>소중한 여행의 순간을 실물 앨범으로 제작할 수 있어요.</li>
        </ul>
      </div>
      <div className="flex flex-col items-center">
        <form>
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            ref={inputRef}
            className="hidden"
          />
          <button
            type="button"
            className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]"
            onClick={choosePhoto}
          >
            <span className="text-bodyBold text-white">사진 업로드</span>
          </button>
        </form>
      </div>
    </main>
  );
}
