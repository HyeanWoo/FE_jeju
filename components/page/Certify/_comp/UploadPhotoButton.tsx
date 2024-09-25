"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

export default function UploadPhotoButton() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      return;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log("파일이 존재하지 않습니다.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(formData);
  };

  return (
    <>
      <div className="flex flex-col space-y-3 py-[84px]">
        <h3 className="text-heading text-neutral-700">
          장소를 인증하면 이런게 좋아요
        </h3>
        <div className="flex space-x-3">
          <Image
            src="/image/certify_example_1.png"
            alt="certify_example_1"
            width={169}
            height={240}
            className="h-[240px] w-[169px] object-cover"
          />
          <Image
            src="/image/certify_example_2.png"
            alt="certify_example_2"
            width={169}
            height={240}
            className="h-[240px] w-[169px] object-cover"
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
      <div className="flex flex-col items-center">
        <form onSubmit={handleSubmit}>
          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && (
            <img src={preview} alt="미리보기" className="h-[240px] w-[350px]" />
          )}
          <button
            type="submit"
            className="flex w-[290px] flex-1 shrink-0 items-center justify-center rounded-lg border bg-main-500 py-[11px]"
          >
            <span className="text-bodyBold text-white">사진 업로드</span>
          </button>
        </form>
      </div>
    </>
  );
}
