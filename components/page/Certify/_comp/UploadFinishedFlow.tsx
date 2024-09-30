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
      <div className="flex flex-col space-y-1 py-2">
        <h2 className="text-title3 text-neutral-900">장소 인증 완료!</h2>
        <h4 className="text-bodyRegular text-neutral-700">
          나만의 트레블컷이 완성되고 있어요.
        </h4>
      </div>
      <div className="flex justify-center pb-[190px] pt-[60px] sm:pb-[192px]">
        <Image
          src="/image/certify_done.png"
          alt="certify-done"
          height={283}
          width={245}
          className="h-[283px] w-[245px] object-cover"
        />
      </div>
      <div className="flex flex-col items-center">
        <button
          className="flex w-full items-center justify-center rounded-lg border bg-main-500 py-[11px]"
          onClick={goToContentPage}
        >
          <span className="text-bodyBold text-white">확인</span>
        </button>
      </div>
    </main>
  );
}
