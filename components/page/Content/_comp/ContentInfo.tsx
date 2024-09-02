const ContentInfo = () => {
  return (
    <div className="flex flex-col gap-2 pb-9 pt-6">
      <h2 className="text-title3 text-neutral-900">곱은달사진관</h2>

      <p className="text-label text-neutral-400">사진관, 포토스튜디오</p>
      <p className="text-label mt-2 text-neutral-700">
        제주특별자치도 제주시 조천읍 곱은달길 24 1층
      </p>
      <p className="text-label mt-1 text-main-500">영업중 매일 09:00 ~ 22:00</p>
      <p className="text-label mt-1 text-neutral-700">1522-3123</p>

      {/* Buttons */}
      <div className="text-bodyBold mt-4 flex space-x-4">
        <button className="w-[169px] flex-1 rounded bg-main-500 py-2 text-white">
          장소 공유
        </button>
        <button className="flex w-[169px] shrink-0 items-center justify-center rounded border py-[11px]">
          내 코스에 담기
        </button>
      </div>
    </div>
  );
};

export default ContentInfo;
