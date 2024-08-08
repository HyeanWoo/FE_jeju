import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactQueryProvider } from "@/components/common/Provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "바로제주 - 제주도 여행 정보",
  description: "OTT에 나온 제주도의 아름다운 여행지를 알려드릴께요!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
