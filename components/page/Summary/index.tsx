"use client";

import Divider from "@/components/common/Divider";
import {
  AboutSummarySection,
  SummaryHeader,
  SummaryInfoSection,
  SimilarSummarySection,
} from "./_comp";
import { useSummary, useSummaryContents } from "@/components/api/queries";

export default function SummaryRoot({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  const { data: { summary } = {} } = useSummary(id);
  const { data: { contents } = {} } = useSummaryContents(id);

  return (
    <div className="space-y mx-auto mb-24 flex w-full max-w-[390px] flex-col">
      <SummaryHeader />
      <main className="container flex w-full flex-col px-5">
        <SummaryInfoSection summaryData={summary} />
        <Divider />
        <AboutSummarySection contents={contents} />
        <Divider />
        <SimilarSummarySection />
      </main>
    </div>
  );
}
