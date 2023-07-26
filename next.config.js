/** @type {import('next').NextConfig} */
// next.config.js
const nextConfig = {
  experimental: {
    // Enable support for React Server Components (requires React 18)
    serverComponents: true,
    // Enable support for streaming rendering (requires React 18)
    concurrentFeatures: true,
    // Enable support for Turbopack bundler (alpha)
    turbopack: true,
    // Enable support for @next/font package (beta)
    fontOptimization: true,
  },
  // Disable features that are not yet supported by experimental features
  // images: false, // disable Next.js Image Optimization API
  i18n: false, // disable Next.js Internationalized Routing}
};
module.exports = nextConfig;
