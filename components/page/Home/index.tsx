"use client";

import HomeHeader from "./_comp/HomeHeader";
import Footer from "@/components/shared/Footer";
import { useSummaries } from "@/components/api/queries";
import {
  HomeHeroBanner,
  HomeLatestSummaries,
  HomeLocation,
  HomeProgram,
  HomeSpotlight,
  HomeSpotsInJeju,
  HomeTrendingSummaries,
} from "./_comp/Section";

const HomeRoot = () => {
  const { data: summariesResponse } = useSummaries();
  const summaries = summariesResponse?.map((summary) => summary.summary) ?? [];

  return (
    <div className="relative">
      <main className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-3 px-5">
        <HomeHeader />
        <div className="container flex flex-col space-y-[50px]">
          <HomeHeroBanner />
          <HomeLocation />
          <HomeTrendingSummaries summaries={summaries} />
          <HomeProgram />
          <HomeSpotlight />
          <HomeLatestSummaries />
          <HomeSpotsInJeju />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomeRoot;
