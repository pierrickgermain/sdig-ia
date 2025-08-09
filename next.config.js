/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Images are served from the local public directory. If external images
  // are later added, domains can be configured here.
  images: {
    // allow dynamic import of svg/other images if necessary
    unoptimized: false,
  },
  experimental: {
    appDir: true
  }
}

module.exports = nextConfig;