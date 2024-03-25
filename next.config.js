/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  env: {
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

module.exports = nextConfig;
