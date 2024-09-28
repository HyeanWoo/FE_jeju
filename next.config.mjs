/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "dkyou7.synology.me",
        port: "",
      },
      {
        protocol: "http",
        hostname: "tong.visitkorea.or.kr",
        port: "",
      },
    ],
  },

  env: {
    NEXT_PUBLIC_BASE_API:
      process.env.NEXT_PUBLIC_BASE_API || "http://localhost:8080", // Default for development
    NEXT_PUBLIC_BASE_API_V1:
      process.env.NEXT_PUBLIC_BASE_API_V1 || "http://localhost:8080/apiV1", // Default for development
  },
};

export default nextConfig;
