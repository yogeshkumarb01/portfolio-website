import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    allowedDevOrigins: ["192.168.1.3", "localhost"],
  },
};

export default nextConfig; 