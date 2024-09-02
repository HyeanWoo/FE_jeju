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
    ],
  },
};

export default nextConfig;
