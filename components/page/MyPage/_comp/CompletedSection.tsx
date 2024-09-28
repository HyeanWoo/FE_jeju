"use client";
import { ThumbnailImage } from "@/components/shared/ThumbnailImage";

const CompletedSection = () => {
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
            <p className="text-base font-bold">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CompletedSection;
