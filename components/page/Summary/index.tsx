import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import Divider from "@/components/common/Divider";
import {
  AboutSummarySection,
  SummaryInfoSection,
  SimilarSummarySection,
  CertifyCompleteModal,
} from "./_comp";
import { fetchContentsBySummaryId, fetchSummary } from "@/components/api/fetch";
import {
  REACT_QUERY_GC_TIME,
  REACT_QUERY_STALE_TIME,
} from "@/components/common/constants";
import DetailHeader from "@/components/shared/Header/DetailHeader";

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
      <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
        <DetailHeader url="/" />
        <main className="container flex w-full flex-col px-5">
          <SummaryInfoSection id={id} />
          <Divider />
          <AboutSummarySection id={id} />
          <Divider />
          <SimilarSummarySection id={id} />
        </main>
      </div>
      <CertifyCompleteModal id={id} />
    </HydrationBoundary>
  );
}
