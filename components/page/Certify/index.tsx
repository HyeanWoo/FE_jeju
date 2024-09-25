import { UploadPhotoButton, CertifyHeader } from "./_comp";

export default function CertifyRoot({
  params,
}: {
  params: { id: string; contentId: string };
}) {
  const summaryId = Number(params.id);
  const contentId = Number(params.contentId);

  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <CertifyHeader />
      <main className="container flex w-full flex-col px-5">
        <div className="flex flex-col space-y-1">
          <h2 className="text-title3 text-neutral-900">
            다녀온 장소를 인증해주세요!
          </h2>
          <h4 className="text-bodyRegular text-neutral-700">
            장소에서 찍은 소중한 사진을 업로드해주세요.
          </h4>
        </div>
        <UploadPhotoButton />
      </main>
    </div>
  );
}
