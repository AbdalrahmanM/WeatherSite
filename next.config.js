/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: [
      'images.unsplash.com', 'openweathermap.org'
    ]
  },
  env: {
    NEXT_PUBLIC_WEATHE_KEY: process.env.NEXT_PUBLIC_WEATHE_KEY,
  }
}