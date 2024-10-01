import { Suspense } from "react";
import Header from "./_comp/Header";
import MyPageTabs from "./_comp/MyPageTabs";
import TabContents from "./_comp/TabContents";
import UserInfo from "./_comp/UserInfo";

const MyPage = () => {
  return (
    <div className="mx-auto flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <Header />
      <main className="container flex w-full flex-col px-5">
        <UserInfo />
        <Suspense>
          <MyPageTabs />
          <TabContents />
        </Suspense>
      </main>
    </div>
  );
};

export default MyPage;
