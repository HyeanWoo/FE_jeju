"use client";

import { useSummaryContentsByUser } from "@/components/api/queries";
import ConfirmModal from "@/components/shared/Confirm/ConfirmModal";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function CertifyCompleteModal({ id }: { id: number }) {
  const [userId, setUserId] = useState<number>(0);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sessionUserId = Number(sessionStorage.getItem("/login"));
      setUserId(sessionUserId);
    }
  });

  const { data: { contents } = {} } = useSummaryContentsByUser(id, userId);

  const isCourseCompleted =
    searchParams.get("isLast") === "true" ||
    (contents?.length !== 0 &&
      contents?.every((content) => content.isCertified === true));

  return (
    isCourseCompleted && <ConfirmModal summaryId={id} onClose={() => {}} />
  );
}
