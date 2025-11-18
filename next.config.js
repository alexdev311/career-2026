// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",           // This replaces `next export`
  trailingSlash: true,        // Helps with static hosting
  images: {
    unoptimized: true         // Required when output: export (no Next Image optimization)
  }
};

export default nextConfig;