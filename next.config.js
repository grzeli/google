/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.google.com.ua"],
  },
  env: {
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY,
    GOOGLE_CX_KEY: process.env.GOOGLE_CX_KEY,
  },
};

module.exports = nextConfig;
