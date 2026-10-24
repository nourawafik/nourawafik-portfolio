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
      {
        source: "/work/dayratna",
        destination: "/work/ulfa",
        permanent: true,
      },
      {
        source: "/work/got-ai",
        destination: "/work/duet",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
