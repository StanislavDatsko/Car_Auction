/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  // Ігнорувати ESLint під час білду (warnings не будуть блокувати деплой)
  // На Vercel білд працюватиме навіть без встановленого ESLint
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript помилки блокуватимуть білд (рекомендовано для продакшену)
  typescript: {
    ignoreBuildErrors: false,
  },
}

module.exports = nextConfig

