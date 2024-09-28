import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const Progress = () => {
  const CompletedList = [
    { desc: "효리네 민박" },
    { desc: "효리네 민박" },
    { desc: "효리네 민박" },
    { desc: "효리네 민박" },
    { desc: "효리네 민박" },
    { desc: "효리네 민박" },
  ];

  return (
    <div className="space-y-4">
      {CompletedList.map((item, index) => (
        <div
          key={index}
          className="opacity-1 flex h-[100px] w-[350px] items-start gap-3"
        >
          <ThumbnailImage
            width={175}
            height={100}
            src={"/image/image-placeholder.svg"}
            alt="Thumbnail"
            className="rounded-md object-cover"
          />

          <div className="flex-1 items-start">
            <p className="rounded-md py-1 text-left text-[12px] font-semibold leading-[14.4px] text-[#8D9097]">
              남은 코스
            </p>
            <p className="text-base font-bold">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Progress;
