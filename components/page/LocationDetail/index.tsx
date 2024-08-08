import Divider from "@/components/common/Divider";
import LocationDetailHeader from "./_comp/LocationDetailHeader";
import LocationDetailInfo from "./_comp/LocationDetailInfo";
import LocationDetailThumbnails from "./_comp/LocationDetailThumbnails";
import LocationDetailSection from "./_comp/LocationDetailSection";

const LocationDetail = () => {
  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-4">
      <LocationDetailHeader />
      <main className="container flex w-full flex-col px-5">
        <LocationDetailThumbnails />
        <LocationDetailInfo />
        <Divider />
        <LocationDetailSection />
      </main>
    </div>
  );
};

export default LocationDetail;
