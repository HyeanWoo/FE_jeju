import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Divider from "@/components/common/Divider";
import {
  AboutSummarySection,
  SummaryHeader,
  SummaryInfoSection,
  SimilarSummarySection,
} from "./_comp";
import { fetchContentsBySummaryId, fetchSummary } from "@/components/api/fetch";
import {
  REACT_QUERY_GC_TIME,
  REACT_QUERY_STALE_TIME,
} from "@/components/common/constants";

export default async function SummaryRoot({
  params,
}: {
  params: { id: string };
}) {
  const id = parseInt(params.id);
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: REACT_QUERY_STALE_TIME,
        gcTime: REACT_QUERY_GC_TIME,
        retry: 3,
      },
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["summary", id],
    queryFn: () => fetchSummary(id),
  });

  await queryClient.prefetchQuery({
    queryKey: ["summaryContents", id],
    queryFn: () => fetchContentsBySummaryId(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="space-y mx-auto mb-24 flex w-full max-w-[390px] flex-col">
        <SummaryHeader />
        <main className="container flex w-full flex-col px-5">
          <SummaryInfoSection id={id} />
          <Divider />
          <AboutSummarySection id={id} />
          <Divider />
          <SimilarSummarySection />
        </main>
      </div>
    </HydrationBoundary>
  );
}
