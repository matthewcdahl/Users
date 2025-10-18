import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Force Webpack instead of Turbopack
  experimental: {
    forceSwcTransforms: true,
  },
  webpack: (config) => {
    // No extra changes needed
    return config;
  },
};

export default nextConfig;