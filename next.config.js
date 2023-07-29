// next.config.js

module.exports = {
  // Enable experimental features
  experimental: {
    // Enable support for React Server Components (requires React 18)
    serverComponents: true,
    // Enable support for streaming rendering (requires React 18)
    concurrentFeatures: true,
    // Enable support for Turbopack bundler (alpha)
    turbopack: true,
  },
  appDirectory: 'app',
};
