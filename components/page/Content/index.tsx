import Divider from "@/components/common/Divider";
import {
  ContentHeader,
  ContentInfo,
  ContentSection,
  ContentThumbnails,
} from "./_comp";

const ContentRoot = () => {
  return (
    <div className="mx-auto mb-24 flex w-full max-w-[390px] flex-col space-y-4">
      <ContentHeader />
      <main className="container flex w-full flex-col px-5">
        <ContentThumbnails />
        <ContentInfo />
        <Divider />
        <ContentSection />
      </main>
    </div>
  );
};

export default ContentRoot;