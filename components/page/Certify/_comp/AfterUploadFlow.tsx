import Image from "next/image";
import { FormEvent } from "react";

export default function AfterUploadFlow({
  preview,
  removePhoto,
  submit,
}: {
  preview: string | null;
  submit: (e: FormEvent<HTMLFormElement>) => void;
  removePhoto: () => void;
}) {
  return (
    <main className="container flex w-full flex-col px-5">
      <div className="flex flex-col space-y-1">
        <h2 className="text-title3 text-neutral-900">
          다녀온 장소를 인증해주세요!
        </h2>
        <h4 className="text-bodyRegular text-neutral-700">
          예쁜 사진이네요! 트레블컷에 한컷 추가해보세요.
        </h4>
      </div>
      <div className="pb-[80px] pt-[96px] sm:pb-[72px] sm:pt-[88px]">
        <Image
          src={preview ?? ""}
          alt="미리보기"
          width={350}
          height={240}
          className="h-[240px] w-[350px] object-cover sm:hidden"
        />
        <Image
          src={preview ?? ""}
          alt="미리보기"
          width={744}
          height={392}
          className="hidden h-[392px] w-[744px] object-cover sm:block"
        />
      </div>
      <div className="flex flex-col items-center">
        <form onSubmit={submit}>
          <div className="flex flex-col space-y-3">
            <button
              type="button"
              className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border border-neutral-300 py-[11px]"
              onClick={removePhoto}
            >
              <span className="text-bodyBold text-neutral-500">재업로드</span>
            </button>
            <button
              type="submit"
              className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]"
            >
              <span className="text-bodyBold text-white">업로드 완료</span>
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
