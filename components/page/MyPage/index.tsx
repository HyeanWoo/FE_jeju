import Footer from "@/components/shared/Footer";
import AccountSettings from "./_comp/AccountSettings";
import Header from "./_comp/Header";
import ImageSection from "./_comp/ImageSection";
import UserInfo from "./_comp/UserInfo";

const MyPage = () => {
  return (
    <div className="space-y mx-auto mb-24 flex w-full max-w-[390px] flex-col sm:max-w-[744px]">
      <div className="w-full max-w-lg rounded-lg bg-white p-4">
        <Header />
        <main className="container flex w-full flex-col px-5">
          <UserInfo />
          <ImageSection
            src="/sea-photo.jpg"
            alt="Sea photo"
            overlayTitle="호동캠핑존"
            overlaySubtitle="콜라자바"
          />
          <AccountSettings />
        </main>
      </div>
    </div>
  );
};

export default MyPage;
