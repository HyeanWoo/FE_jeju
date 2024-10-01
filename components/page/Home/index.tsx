import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import HomeHeader from "./_comp/HomeHeader";
import {
  HomeHeroBanner,
  HomeLatestSummaries,
  HomeSpotlight,
  HomeSpotsInJeju,
  HomeTouringSummaries,
  HomeTrendingSummaries,
} from "./_comp/Section";
import { fetchSummaries } from "@/components/api/fetch";
import {
  REACT_QUERY_GC_TIME,
  REACT_QUERY_STALE_TIME,
} from "@/components/common/constants";
import Footer from "@/components/shared/Footer";
import BottomSheet from "@/components/common/Modal/BottomSheet/BottomSheet";

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
      <main className="mx-auto mb-[50px] flex w-full max-w-[390px] flex-col px-5 sm:max-w-[744px]">
        <HomeHeader />
        <div className="container flex flex-col">
          <HomeHeroBanner />
          <HomeTouringSummaries />
          <HomeTrendingSummaries />
          {/* <HomeProgram /> */}
          <HomeSpotlight />
          <HomeLatestSummaries />
          <HomeSpotsInJeju />
        </div>
      </main>
      <Footer />
    </HydrationBoundary>
  );
}
