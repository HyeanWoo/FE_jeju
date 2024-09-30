"use client";

import { ChangeEvent, FormEvent, useRef, useState } from "react";
import BeforeUploadFlow from "./BeforeUploadFlow";
import AfterUploadFlow from "./AfterUploadFlow";
import UploadFinishedFlow from "./UploadFinishedFlow";
import { useContentCertification } from "@/components/api/mutations";

enum UPLOAD_STEP {
  before = "before",
  after = "after",
  finish = "finish",
}

export default function UploadPhotoFunnel({
  contentId,
  summaryId,
}: {
  summaryId: number;
  contentId: number;
}) {
  const [step, setStep] = useState<UPLOAD_STEP>(UPLOAD_STEP.before);
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const certifyMutation = useContentCertification(contentId);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    // 10MB 제한
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setStep(UPLOAD_STEP.after);
      return;
    } else {
      setFile(null);
      setPreview(null);
      console.warn("파일 크기는 10MB 이하여야 합니다");
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      console.log("업로드에 실패했습니다. 다시 시도해주세요.");
      return;
    }

    const formData = new FormData();
    formData.append("memberId", Number(3717517).toString());
    formData.append("summaryId", summaryId.toString());
    formData.append("image", file);

    certifyMutation.mutate(formData);

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
