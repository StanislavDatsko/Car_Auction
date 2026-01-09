'use client'

import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function LogisticsSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { t, dir } = useLanguage()

  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-primary-darkBlue/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Заголовок - тільки для мобільних */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight order-1 lg:hidden ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
            dir={dir}
          >
            <span className="bg-gradient-to-r from-white to-primary-orange/80 bg-clip-text text-transparent">
              {t.logistics.titlePart1}
            </span>
            <br />
            <span className="text-white/90">
              {t.logistics.titlePart2}
            </span>
          </motion.h2>

          {/* Відео блок */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`relative order-2 ${dir === 'rtl' ? 'lg:order-2' : 'lg:order-1'}`}
            dir={dir}
          >
            {/* Декоративне світіння */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary-orange/20 rounded-2xl blur-3xl opacity-60" />
            
            {/* Контейнер відео */}
            <div className="relative rounded-xl overflow-hidden border-2 border-primary-orange/30 shadow-2xl shadow-primary-orange/20 bg-black/20 backdrop-blur-sm">
              <video
                ref={videoRef}
                className="w-full h-auto rounded-xl"
                controls
                playsInline
                preload="none"
                poster="/img/ship.jpg"
                style={{
                  boxShadow: '0 0 40px rgba(235, 93, 29, 0.3), 0 0 80px rgba(235, 93, 29, 0.15)',
                }}
              >
                <source src="/video/IMG_6185.mp4" type="video/mp4" />
                {t.logistics.videoNotSupported}
              </video>
              
              {/* Додатковий ефект світіння навколо відео */}
              <div className="absolute inset-0 pointer-events-none rounded-xl" 
                   style={{
                     boxShadow: 'inset 0 0 60px rgba(235, 93, 29, 0.1)',
                   }}
              />
            </div>
          </motion.div>

          {/* Текстовий блок - для desktop містить заголовок і опис, для mobile тільки опис */}
          <motion.div
            initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`space-y-6 order-3 ${dir === 'rtl' ? 'lg:order-1' : 'lg:order-2'}`}
            dir={dir}
          >
            {/* Заголовок - тільки для desktop */}
            <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight" dir={dir}>
              <span className="bg-gradient-to-r from-white to-primary-orange/80 bg-clip-text text-transparent">
                {t.logistics.titlePart1}
              </span>
              <br />
              <span className="text-white/90">
                {t.logistics.titlePart2}
              </span>
            </h2>
            <p className={`text-lg sm:text-xl text-white/70 leading-relaxed ${dir === 'rtl' ? 'text-right' : 'text-left'}`} dir={dir}>
              {t.logistics.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

