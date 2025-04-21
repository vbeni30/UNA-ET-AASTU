/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'flagcdn.com',
      'upload.wikimedia.org',
      'www.un.org',
      'www.undp.org',
      'www.unicef.org',
      'au.int',
      'europa.eu',
    ],
    unoptimized: true,
  },
}

export default nextConfig
