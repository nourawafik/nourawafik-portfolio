import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
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
      {
        source: "/work/kemeclinic",
        destination: "/work/praxa",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
