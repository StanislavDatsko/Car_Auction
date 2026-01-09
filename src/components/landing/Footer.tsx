'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Twitter, Linkedin, Youtube, Mail, Phone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://www.instagram.com/car_auctions_?igsh=cXU0bzRzZjRkbTEz&utm_source=qr',
      color: 'hover:text-[#E4405F]',
      glowColor: 'hover:shadow-[0_0_20px_rgba(228,64,95,0.5)]',
    },
  ]

  return (
      <footer className="relative bg-primary-darkBlue/70 backdrop-blur-sm border-t border-white/10">
        <div className="absolute inset-0 opacity-5">
          <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(/img/hero-bg.jpg)' }}
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 mb-12">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
            >
              <Image
                  src="/img/Logo.svg"
                  alt="CarAuction Logo"
                  width={150}
                  height={50}
                  className="h-12 w-auto mb-6"
              />
              <p className="text-white/70 mb-8 max-w-xl leading-relaxed text-base">
                {t.footer.desc}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <a href="mailto:info@carauction.com" dir="ltr" className="flex items-center gap-3 text-white/90 hover:text-primary-orange transition-colors group">
                  <div className="p-2 rounded-lg glass group-hover:glass-strong transition-all">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span className="font-medium">info@carauction.com</span>
                </a>
                <a href="tel:+380989860325" dir="ltr" className="flex items-center gap-3 text-white/90 hover:text-primary-orange transition-colors group">
                  <div className="p-2 rounded-lg glass group-hover:glass-strong transition-all">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span className="font-medium">+380 (98) 986 03 25</span>
                </a>
              </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-1"
            >
              <h3 className="text-white font-semibold text-lg mb-6">
                {t.footer.follow}
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon
                  return (
                      <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -3 }}
                          className={`p-3 rounded-xl glass hover:glass-strong transition-all duration-200 ${social.color} ${social.glowColor} group`}
                      >
                        <Icon className={`h-5 w-5 text-white/90 group-hover:scale-110 transition-transform ${social.color}`} />
                      </motion.a>
                  )
                })}
              </div>
            </motion.div>
          </div>

          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-sm text-white/60"
              >
                © {new Date().getFullYear()} CarAuction. {t.footer.rights}
              </motion.p>

              <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
              >
                <Link href="/privacy-policy" className="text-sm text-white/60 hover:text-primary-orange transition-colors duration-200">
                  {t.footer.privacy}
                </Link>
                <span className="text-white/40">•</span>
                <Link href="/terms-of-use" className="text-sm text-white/60 hover:text-primary-orange transition-colors duration-200">
                  {t.footer.terms}
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
  )
}