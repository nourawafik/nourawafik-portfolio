import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.nourawafik.com" }],
        destination: "https://nourawafik.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
