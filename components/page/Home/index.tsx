import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import HomeHeader from "./_comp/HomeHeader";  
import Footer from "@/components/shared/Footer";
import {
  HomeHeroBanner,
  HomeLatestSummaries,
  HomeLocation,
  HomeProgram,
  HomeSpotlight,
  HomeSpotsInJeju,
  HomeTrendingSummaries,
} from "./_comp/Section";

import { fetchSummaries } from "@/components/api/fetch";
import {
  REACT_QUERY_GC_TIME,
  REACT_QUERY_STALE_TIME,
} from "@/components/common/constants";

export default async function HomeRoot() {
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
    queryKey: ["summaries"],
    queryFn: fetchSummaries,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="relative">
        <main className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-3 px-5">
          <HomeHeader />
          <div className="container flex flex-col space-y-[50px]">
            <HomeHeroBanner />
            <HomeLocation />
            <HomeTrendingSummaries />
            <HomeProgram />
            <HomeSpotlight />
            <HomeLatestSummaries />
            <HomeSpotsInJeju />
          </div>
        </main>
        <Footer />
      </div>
    </HydrationBoundary>
  );
}
