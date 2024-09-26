import { CertifyHeader, UploadPhotoFunnel } from "./_comp";

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
      <UploadPhotoFunnel />
    </div>
  );
}
