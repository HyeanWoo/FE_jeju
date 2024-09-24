"use client";

import Divider from "@/components/common/Divider";
import { ContentHeader, ContentInfo, SimilarContent } from "./_comp";
import { useSummaryContents } from "@/components/api/queries";
import { useMemo } from "react";
import Footer from "@/components/shared/Footer";

export default function ContentRoot({
  params,
}: {
  params: { id: string; contentId: string };
}) {
  const summaryId = Number(params.id);
  const contentId = Number(params.contentId);

  const { data: { contents } = {} } = useSummaryContents(summaryId);

  if (!contents) {
    return <div>loading...</div>;
  }

  if (contents.length === 0) {
    return <div>콘텐츠가 존재하지 않습니다.</div>;
  }

  const content = contents.find((item) => item.id === contentId);

  if (!content) {
    return <div>잘못된 경로입니다.</div>;
  }

  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <ContentHeader />
      <main className="container flex w-full flex-col px-5">
        <ContentInfo content={content} />
        <Divider />
        <SimilarContent content={content} />
      </main>
      <Footer />
    </div>
  );
}
