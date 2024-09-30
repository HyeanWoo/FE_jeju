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
      <div className="flex flex-col space-y-1 py-2">
        <h2 className="text-title3 text-neutral-900">
          다녀온 장소를 인증해주세요!
        </h2>
        <h4 className="text-bodyRegular text-neutral-700">
          장소에서 찍은 소중한 사진을 업로드해주세요.
        </h4>
      </div>
      <div className="flex flex-col space-y-3 py-6">
        <div className="flex justify-center space-x-5 rounded-[10px] bg-neutral-700 py-[30px]">
          <Image
            src="/image/travelcut-frame-1.png"
            alt="travelcut-frame-1.png"
            width={100}
            height={268}
            className="h-[268px] w-[100px] object-cover"
          />
          <Image
            src="/image/travelcut-frame-2.png"
            alt="travelcut-frame-2.png"
            width={100}
            height={268}
            className="h-[268px] w-[100px] object-cover"
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
      <div className="flex w-full flex-col items-center pt-[87px] sm:pt-[105px]">
        <form className="w-full">
          <input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            ref={inputRef}
            className="hidden"
          />
          <button
            type="button"
            className="flex w-full items-center justify-center rounded-lg border bg-main-500 py-[11px]"
            onClick={choosePhoto}
          >
            <span className="text-bodyBold text-white">사진 업로드</span>
          </button>
        </form>
      </div>
    </main>
  );
}
