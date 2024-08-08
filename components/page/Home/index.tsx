import HomeHeader from "./_comp/HomeHeader";
import Footer from "@/components/shared/Footer";
import HomeContent from "./_comp/HomeContent";

const HomeRoot = () => {
  return (
    <div className="relative">
      <main className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-3 px-5">
        <HomeHeader />
        <HomeContent />
      </main>
      <Footer />
    </div>
  );
};

export default HomeRoot;
