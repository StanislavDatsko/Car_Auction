'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { languages, Language } from '@/lib/translations'
import 'flag-icons/css/flag-icons.min.css'

const getFlagCode = (langCode: string) => {
  const map: { [key: string]: string } = {
    'en': 'gb',
    'uk': 'ua',
    'ua': 'ua',
    'ge': 'ge',
    'ar': 'sa',
    'pl': 'pl',
    'de': 'de',
    'fr': 'fr',
    'es': 'es',
    'tr': 'tr'
  }
  return map[langCode] || langCode
}

function LanguageSwitcher({ isMobile = false }: { isMobile?: boolean }) {
  const { lang, setLang } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleLangChange = (code: Language) => {
    setLang(code)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  return (
      <div className="relative" ref={containerRef}>
        <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(!isOpen)
            }}
            className={`flex items-center gap-2 text-white hover:text-primary-orange transition-colors ${isMobile ? 'p-2' : ''}`}
        >
          <span className={`fi fi-${getFlagCode(lang)} fis rounded-sm text-lg`} />
          {/* На десктопі показуємо текст, на мобільному - ні */}
          <span className={`uppercase font-bold ${isMobile ? 'hidden' : 'block'}`}>{lang}</span>
          <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
              <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  className={`absolute top-full mt-2 glass-strong rounded-xl overflow-hidden py-2 shadow-xl border border-white/10 z-50 ${isMobile ? 'right-[-50px]' : 'right-0'} w-48`}
                  style={{ maxHeight: '300px', overflowY: 'auto' }}
              >
                {languages.map((l) => (
                    <button
                        key={l.code}
                        onClick={() => handleLangChange(l.code as Language)}
                        className={`w-full text-left px-4 py-3 text-sm hover:bg-white/10 transition-colors flex items-center justify-between ${
                            lang === l.code ? 'text-primary-orange bg-white/5' : 'text-white'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`fi fi-${getFlagCode(l.code)} fis rounded-sm`} />
                        <span>{l.label || l.name}</span>
                      </div>
                      {lang === l.code && <div className="w-1.5 h-1.5 rounded-full bg-primary-orange" />}
                    </button>
                ))}
              </motion.div>
          )}
        </AnimatePresence>
      </div>
  )
}

// --- Головний компонент Header ---
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
      setIsMobileMenuOpen(false)
    }
  }

  const scrollToForm = () => {
    scrollToSection('#early-contact')
  }

  return (
      <header className="fixed top-0 w-full z-50 glass-strong transition-all duration-300" dir="ltr">
        <nav className="container mx-auto px-4 h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-shrink-0 flex items-center cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <Image
                src="/img/Logo.svg"
                alt="CarAuction Logo"
                width={150}
                height={50}
                className="h-10 w-auto md:h-12 object-contain"
                priority
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageSwitcher isMobile={false} />

            <button
                onClick={scrollToForm}
                className="px-6 py-2 bg-primary-orange text-white rounded-lg hover:bg-primary-orange/90 transition-colors font-medium shadow-lg shadow-primary-orange/20"
            >
              {t.nav.access}
            </button>
          </div>

          {/* Mobile Actions (Language + Burger) */}
          <div className="md:hidden flex items-center gap-2">

            <LanguageSwitcher isMobile={true} />

            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 ml-1"
                aria-label="Menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {isMobileMenuOpen && (
              <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="md:hidden overflow-hidden glass-strong border-t border-white/10"
              >
                <div className="p-4 space-y-6">
                  <button
                      onClick={scrollToForm}
                      className="w-full py-3 bg-primary-orange text-white rounded-lg font-bold shadow-lg shadow-primary-orange/20"
                  >
                    {t.nav.access}
                  </button>
                </div>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  )
}