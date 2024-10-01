import { Suspense } from "react";
import Detail from "./_comp/Detail";
import DetailHeader from "@/components/shared/Header/DetailHeader";

const DownloadPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <DetailHeader url="/" />
      <div className="container flex flex-col">
        <Suspense>
          <Detail />
        </Suspense>
      </div>
    </div>
  );
};

export default DownloadPage;
