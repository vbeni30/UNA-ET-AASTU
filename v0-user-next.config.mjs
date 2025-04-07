/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // This ensures Next.js doesn't try to restore scroll position
    scrollRestoration: false,
  },
}

export default nextConfig

