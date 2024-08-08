import HomeHeroBanner from "./Section/HomeHeroBanner";
import HomeLatestCourses from "./Section/HomeLatestCourses";
import HomeLocation from "./Section/HomeLocation";
import HomeProgram from "./Section/HomeProgram";
import HomeSpotlight from "./Section/HomeSpotlight";
import HomeSpotsInJeju from "./Section/HomeSpotsInJeju";
import HomeTrendingCourses from "./Section/HomeTrendingCourses";

const HomeContent = () => {
  return (
    <div className="container flex flex-col space-y-[50px]">
      <HomeHeroBanner />
      <HomeLocation />
      <HomeTrendingCourses />
      <HomeProgram />
      <HomeSpotlight />
      <HomeLatestCourses />
      <HomeSpotsInJeju />
    </div>
  );
};

export default HomeContent;
