/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.google.com.ua"],
  },
};

module.exports = nextConfig;
