import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,

  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  },

  // Disable custom headers because they don't work in static export
  async headers() {
    return [];
  },
};

export default nextConfig;
