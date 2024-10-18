"use client";

import { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
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
  const [message, setMessage] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const userId = sessionStorage.getItem("/login");

  const certifyMutation = useContentCertification(
    contentId,
    summaryId,
    Number(userId),
  );

  useEffect(() => {
    console.log(message);
  }, [message]);

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    setMessage("");

    // 10MB 제한
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setStep(UPLOAD_STEP.after);
      return;
    } else {
      setFile(null);
      setPreview(null);
      setMessage("파일 크기는 10MB 이하여야 합니다.");
    }
  };

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!file) {
      setMessage("업로드에 실패했습니다. 다시 시도해주세요.");
      return;
    }

    if (!userId) {
      setMessage("잘못된 접근입니다.");
      return;
    }

    const formData = new FormData();
    formData.append("memberId", userId);
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
        <BeforeUploadFlow
          onFileChange={onFileChange}
          inputRef={fileInputRef}
          message={message}
        />
      )}
      {step === UPLOAD_STEP.after && (
        <AfterUploadFlow
          preview={preview}
          submit={submit}
          removePhoto={removePhoto}
          message={message}
        />
      )}
      {step === UPLOAD_STEP.finish && (
        <UploadFinishedFlow isLast={certifyMutation.data?.isLast} />
      )}
    </div>
  );
}
