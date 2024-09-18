import type { Metadata } from "next";
import { ReactQueryProvider } from "@/components/common/Provider";
import localFont from "next/font/local";
import "./globals.css";

const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

export const metadata: Metadata = {
  title: "travelcut - 제주도 여행 정보",
  description: "OTT에 나온 제주도의 아름다운 여행지를 알려드릴께요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=d189c92b8d450da84be516fa5364123b"
        ></script>
      </head>
      <body className={pretendard.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
