import Image from "next/image";

export default function CtaButtonGroup() {
  return (
    <div className="flex space-x-3">
      <button className="flex w-[72px] flex-col items-center space-y-1">
        <Image
          src="/image/icon/add-bookmark.svg"
          alt="bookmark"
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span className="text-caption text-neutral-800">북마크 추가</span>
      </button>
      <button className="flex w-[72px] flex-col items-center space-y-1">
        <Image
          src="/image/icon/thumbs-up-like.svg"
          alt="like"
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span className="text-caption text-neutral-800">평가</span>
      </button>
      <button className="flex w-[72px] flex-col items-center space-y-1">
        <Image
          src="/image/icon/paper-plane-share.svg"
          alt="share"
          width={16}
          height={16}
          className="h-4 w-4"
        />
        <span className="text-caption text-neutral-800">추천</span>
      </button>
    </div>
  );
}
