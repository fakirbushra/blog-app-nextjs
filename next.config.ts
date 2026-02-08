import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        hostname: "images.unsplash.com",
        protocol: "https",
        port: "",
      },
      {
        protocol: "http", 
        hostname: "127.0.0.1", 
        port: "3210", 
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;

