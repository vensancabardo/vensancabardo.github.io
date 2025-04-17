import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  devIndicators: false,
  assetPrefix: isProd ? '/vensancabardo.github.io/' : '',
  basePath: isProd ? '/vensancabardo.github.io' : '',
  output: 'export'
};

export default nextConfig;
