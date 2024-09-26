import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

export default function UploadFinishedFlow() {
  const router = useRouter();
  const pathname = usePathname();

  const goToContentPage = () => {
    router.push(pathname.split("/").slice(0, 3).join("/"));
  };

  return (
    <main className="container flex w-full flex-col px-5">
      <div className="flex flex-col space-y-1">
        <h2 className="text-title3 text-neutral-900">
          다녀온 장소를 인증해주세요!
        </h2>
        <h4 className="text-bodyRegular text-neutral-700">
          나만의 트레블컷이 완성되고 있어요.
        </h4>
      </div>
      <div className="flex justify-center pb-[107px] pt-[185px] sm:pb-[80px] sm:pt-[120px]">
        <Image
          src="/image/certify_done.png"
          alt="certify-done"
          height={241}
          width={264}
          className="h-[241px] w-[264px] sm:hidden"
        />
        <Image
          src="/image/certify_done.png"
          alt="certify-done"
          height={300}
          width={320}
          className="hidden h-[300px] w-[320px] sm:block"
        />
      </div>
      <div className="flex flex-col items-center">
        <button
          className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]"
          onClick={goToContentPage}
        >
          <span className="text-bodyBold text-white">확인</span>
        </button>
      </div>
    </main>
  );
}
