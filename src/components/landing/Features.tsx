'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import {
  Globe, FileCheck, Calculator, MapPin, LayoutGrid,
  LayoutDashboard, Bot, ShieldCheck, FileSearch, Layers, ArrowRight
} from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export default function Features() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const element = document.querySelector('#contact')
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

  // Масив перенесено сюди, щоб використовувати 't'
  const features = [
    {
      icon: Globe,
      title: t.features.items.access.title,
      description: t.features.items.access.desc,
      color: 'from-primary-orange/20 to-primary-orange/5',
      iconColor: 'text-primary-orange',
    },
    {
      icon: FileCheck,
      title: t.features.items.history.title,
      description: t.features.items.history.desc,
      color: 'from-accent-electricBlue/20 to-accent-electricBlue/5',
      iconColor: 'text-accent-electricBlue',
    },
    {
      icon: Calculator,
      title: t.features.items.calc.title,
      description: t.features.items.calc.desc,
      color: 'from-accent-neonGreen/20 to-accent-neonGreen/5',
      iconColor: 'text-accent-neonGreen',
    },
    {
      icon: MapPin,
      title: t.features.items.tracking.title,
      description: t.features.items.tracking.desc,
      color: 'from-primary-orange/20 to-primary-orange/5',
      iconColor: 'text-primary-orange',
    },
    {
      icon: LayoutGrid,
      title: t.features.items.multi.title,
      description: t.features.items.multi.desc,
      color: 'from-accent-electricBlue/20 to-accent-electricBlue/5',
      iconColor: 'text-accent-electricBlue',
    },
    {
      icon: LayoutDashboard,
      title: t.features.items.pro.title,
      description: t.features.items.pro.desc,
      color: 'from-primary-orange/20 to-primary-orange/5',
      iconColor: 'text-primary-orange',
    },
    {
      icon: Bot,
      title: t.features.items.ai.title,
      description: t.features.items.ai.desc,
      color: 'from-accent-neonGreen/20 to-accent-neonGreen/5',
      iconColor: 'text-accent-neonGreen',
    },
    {
      icon: ShieldCheck,
      title: t.features.items.docs.title,
      description: t.features.items.docs.desc,
      color: 'from-accent-electricBlue/20 to-accent-electricBlue/5',
      iconColor: 'text-accent-electricBlue',
    },
    {
      icon: FileSearch,
      title: t.features.items.carfax.title,
      description: t.features.items.carfax.desc,
      color: 'from-primary-orange/20 to-primary-orange/5',
      iconColor: 'text-primary-orange',
    },
    {
      icon: Layers,
      title: t.features.items.bidding.title,
      description: t.features.items.bidding.desc,
      color: 'from-accent-neonGreen/20 to-accent-neonGreen/5',
      iconColor: 'text-accent-neonGreen',
    },
  ]

  return (
      <section id="features" className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-darkBlue/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white to-primary-orange/80 bg-clip-text text-transparent">
              {t.features.title}
            </span>
            </h2>
            <p className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
              {t.features.subtitle}
            </p>
          </motion.div>

          <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                  <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative"
                  >
                    <div className="glass h-full rounded-xl sm:rounded-2xl p-3 sm:p-6 lg:p-8 hover:glass-strong transition-all duration-300 relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                      <div className="relative z-10">
                        <motion.div
                            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                            transition={{ duration: 0.5 }}
                            className="mb-2 sm:mb-4 inline-block"
                        >
                          <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl glass-strong">
                            <Icon className={`h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 ${feature.iconColor} transition-transform group-hover:scale-110`} />
                          </div>
                        </motion.div>
                        <h3 className="text-sm sm:text-lg lg:text-xl font-bold mb-1.5 sm:mb-3 text-white group-hover:text-primary-orange transition-colors leading-tight">
                          {feature.title}
                        </h3>
                        <p className="text-xs sm:text-sm lg:text-base text-white/70 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
              )
            })}
          </motion.div>

          {/* Commission Banner */}
          <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 lg:mt-16"
          >
            <div className="relative overflow-hidden rounded-2xl glass-strong border-2 border-primary-orange/50">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange/20 via-primary-orange/30 to-accent-electricBlue/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-orange via-accent-electricBlue to-primary-orange opacity-20 blur-xl animate-pulse" />

              <div className="relative z-10 px-8 py-10 sm:px-12 sm:py-14 text-center">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col items-center"
                >
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-white via-primary-orange to-accent-electricBlue bg-clip-text text-transparent">
                    {t.features.invoiceTitle}
                  </span>
                  </h3>
                  <p className="text-lg sm:text-xl text-white/80 mt-4 max-w-2xl">
                    {t.features.invoiceDesc}
                  </p>

                  <motion.button
                      onClick={scrollToForm}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-8 px-8 py-3 bg-white text-primary-darkBlue rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl shadow-white/10 flex items-center gap-2"
                  >
                    {t.features.invoiceBtn}
                    <ArrowRight className="h-5 w-5" />
                  </motion.button>

                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Images */}
          <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16"
          >
            <div className="relative rounded-2xl overflow-hidden glass-strong group">
              <Image
                  src="/img/post-image7-copyright-890x664.jpg"
                  alt="Car Auction"
                  width={890}
                  height={664}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden glass-strong group">
              <Image
                  src="/img/Create_an_image_that_visually_represents_the_conce-1764322159568-min-840x840.png"
                  alt="Car Auction Platform"
                  width={840}
                  height={840}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>
  )
}