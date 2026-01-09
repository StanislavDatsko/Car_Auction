/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    domains: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
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
  // Оптимізація продуктивності
  poweredByHeader: false,
  generateEtags: true,
}

module.exports = nextConfig

