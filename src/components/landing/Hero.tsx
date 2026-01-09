'use client'

import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const element = document.querySelector('#early-contact')
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
      <section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/img/hero-bg.jpg"
            alt="Hero background"
            fill
            priority
            fetchPriority="high"
            quality={85}
            className="object-cover object-center"
            sizes="100vw"
          />
          {/* Overlay - затемнення для кращої читабельності тексту */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Анімований акцентний градієнт */}
          <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  'radial-gradient(circle at 20% 50%, rgba(235, 93, 29, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 80% 50%, rgba(235, 93, 29, 0.3) 0%, transparent 50%)',
                  'radial-gradient(circle at 20% 50%, rgba(235, 93, 29, 0.3) 0%, transparent 50%)',
                ],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 mt-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            >
            <span className="bg-gradient-to-r from-white via-white to-primary-orange/90 bg-clip-text text-transparent">
              CarAuction
            </span>
              <br />
              <span className="text-white/90">
              {t.hero.titleSuffix}
            </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-lg sm:text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
            >
              <motion.button
                  onClick={scrollToForm}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-primary-orange text-white rounded-lg font-semibold text-lg hover:bg-primary-orange/90 transition-all duration-200 shadow-xl shadow-primary-orange/40 flex items-center gap-2 group"
              >
                {t.hero.button}
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        >
          <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/60"
          >
            <span className="text-sm">{t.hero.scroll}</span>
            <ArrowDown className="h-6 w-6" />
          </motion.div>
        </motion.div>
      </section>
  )
}