"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import BeforeUploadFlow from "./BeforeUploadFlow";
import AfterUploadFlow from "./AfterUploadFlow";
import UploadFinishedFlow from "./UploadFinishedFlow";

enum UPLOAD_STEP {
  before = "before",
  after = "after",
  finish = "finish",
}

export default function UploadPhotoFunnel() {
  const [step, setStep] = useState<UPLOAD_STEP>(UPLOAD_STEP.before);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setStep(UPLOAD_STEP.after);
      return;
    }

    console.log("사진 선택에 실패했습니다.");
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log("업로드에 실패했습니다. 다시 시도해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    console.log(file);

    setStep(UPLOAD_STEP.finish);
  };

  const removePhoto = () => {
    setFile(null);
    setPreview(null);
    setStep(UPLOAD_STEP.before);
  };

  return (
    <div>
      {step === UPLOAD_STEP.before && (
        <BeforeUploadFlow onFileChange={onFileChange} inputRef={fileInputRef} />
      )}
      {step === UPLOAD_STEP.after && (
        <AfterUploadFlow
          preview={preview}
          submit={submit}
          removePhoto={removePhoto}
        />
      )}
      {step === UPLOAD_STEP.finish && <UploadFinishedFlow />}
    </div>
  );
}
