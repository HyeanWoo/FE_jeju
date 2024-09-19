import { KakaoMapSDKProvider } from "@/components/common/Provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <KakaoMapSDKProvider>{children}</KakaoMapSDKProvider>;
}
