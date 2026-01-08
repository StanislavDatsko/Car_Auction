'use client'

import { motion } from 'framer-motion'
import { Rocket, TrendingUp, Users, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Users,
    text: 'Понад 50 менеджерів займаються продажем вашого щойно викупленого авто.',
  },
  {
    icon: TrendingUp,
    text: 'Автодилер має можливість вигравати вже наступне авто, не чекаючи продажу попереднього, тим самим збільшуючи свій оборот.',
  },
  {
    icon: Zap,
    text: 'Ексклюзивна послуга продажу вашого авто без зайвих клопотів для вас.',
  },
]

export default function FastTurnover() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-darkBlue/30 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Main Content Card */}
          <div className="glass-strong rounded-2xl p-8 sm:p-10 lg:p-12 relative overflow-hidden">
            {/* Decorative Gradient */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-orange/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-electricBlue/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              {/* Icon & Title */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, type: 'spring' }}
                className="flex items-center justify-center mb-8"
              >
                <div className="p-4 rounded-2xl bg-gradient-to-br from-primary-orange/20 to-accent-electricBlue/20 border border-primary-orange/30">
                  <Rocket className="h-12 w-12 text-primary-orange" />
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12"
              >
                <span className="bg-gradient-to-r from-white via-primary-orange to-accent-electricBlue bg-clip-text text-transparent">
                  Ми не чекаємо прибуття автомобіля, а продаємо його ще в дорозі!
                </span>
              </motion.h2>

              {/* Benefits List */}
              <div className="space-y-6 mb-10">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 p-3 rounded-xl glass bg-gradient-to-br from-primary-orange/10 to-accent-electricBlue/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary-orange" />
                      </div>
                      <p className="text-lg sm:text-xl text-white/90 leading-relaxed pt-1">
                        {benefit.text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

              {/* Tagline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-center pt-6 border-t border-white/10"
              >
                <p className="text-2xl sm:text-3xl font-bold">
                  <span className="bg-gradient-to-r from-accent-neonGreen to-accent-electricBlue bg-clip-text text-transparent">
                    Скороти час продажу свіжо викупленого авто
                  </span>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

