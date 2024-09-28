"use client";

import Divider from "@/components/common/Divider";
import { ContentHeader, ContentInfo, SimilarContent } from "./_comp";
import { useContent } from "@/components/api/queries";

export default function ContentRoot({
  params,
}: {
  params: { contentId: string };
}) {
  const contentId = Number(params.contentId);
  const { data: content } = useContent(contentId);

  if (!content) {
    return <div>콘텐츠가 존재하지 않습니다.</div>;
  }

  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <ContentHeader />
      <main className="container flex w-full flex-col px-5">
        <ContentInfo content={content} />
        <Divider />
        <SimilarContent content={content} />
      </main>
    </div>
  );
}
