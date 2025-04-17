import type { NextConfig } from "next";

const isGhPages = process.env.DEPLOY_TARGET === 'gh-pages';
const isProd = process.env.NODE_ENV === 'production';
const repo = 'vensancabardo.github.io';

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  devIndicators: false,
  basePath: isGhPages && isProd ? `/${repo}` : '',
  assetPrefix: isGhPages && isProd ? `/${repo}/` : '',
  output: 'export'
};

export default nextConfig;
