import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export — emits to ./out and bypasses OpenNext entirely.
  output: "export",
  images: {
    // next/image optimizer is not available in static export.
    unoptimized: true,
  },
  // Match the legacy Framer URLs / let CF static assets resolve cleanly.
  trailingSlash: true,
};

export default nextConfig;
