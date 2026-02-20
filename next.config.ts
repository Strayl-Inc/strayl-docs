import { createMDX } from "fumadocs-mdx/next";
import type { NextConfig } from "next";

const withMDX = createMDX();

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        destination: "/api/raw/docs/:path*",
        source: "/docs/:path*.md",
      },
    ];
  },
};

export default withMDX(nextConfig);
