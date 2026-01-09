'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Play, X } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const fullscreenVideoRef = useRef<HTMLVideoElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 8
      videoRef.current.pause()
    }
  }, [])

  const openFullscreen = () => {
    setIsFullscreen(true)
    setTimeout(() => {
      if (fullscreenVideoRef.current) {
        fullscreenVideoRef.current.currentTime = 0
        fullscreenVideoRef.current.play()
      }
    }, 100)
  }

  const closeFullscreen = () => {
    setIsFullscreen(false)
    if (fullscreenVideoRef.current) {
      fullscreenVideoRef.current.pause()
    }
  }

  return (
      <section id="about" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-primary-orange/80 bg-clip-text text-transparent">
                {t.video.titlePrefix}
              </span>
                <span className="text-white/90">
                {' '} {t.video.titleSuffix}
              </span>
              </h2>
              <p className="text-lg sm:text-xl text-white/70 leading-relaxed">
                {t.video.description}
              </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8 }}
                className="relative group cursor-pointer"
                onClick={openFullscreen}
            >
              <div dir="ltr" className="relative rounded-2xl overflow-hidden glass-strong shadow-2xl shadow-primary-orange/20 aspect-video max-h-[400px]">
                <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    controls={false}
                    loop={false}
                    muted
                    playsInline
                    preload="none"
                    poster="/img/service-image3-copyright-840x560.jpg"
                >
                  <source src="/video/demo.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                  <motion.button
                      onClick={(e) => { e.stopPropagation(); openFullscreen() }}
                      className="glass-strong rounded-full p-4 backdrop-blur-xl"
                  >
                    <Play className="h-12 w-12 text-white" fill="white" />
                  </motion.button>
                </div>
              </div>
              <div className="absolute -z-10 top-4 right-4 w-full h-full bg-primary-orange/20 rounded-2xl blur-2xl opacity-50" />
            </motion.div>
          </div>
        </div>

        <AnimatePresence>
          {isFullscreen && (
              <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
                  onClick={closeFullscreen}
              >
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="relative w-full h-full max-w-7xl max-h-[90vh] p-4"
                    onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                      onClick={closeFullscreen}
                      className="absolute top-6 right-6 z-10 glass-strong rounded-full p-3 text-white hover:bg-white/20 transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </motion.button>
                  <video
                      ref={fullscreenVideoRef}
                      className="w-full h-full object-contain rounded-lg"
                      controls
                      autoPlay
                      playsInline
                      preload="auto"
                  >
                    <source src="/video/demo.mp4" type="video/mp4" />
                  </video>
                </motion.div>
              </motion.div>
          )}
        </AnimatePresence>
      </section>
  )
}