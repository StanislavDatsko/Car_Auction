'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { privacyPolicyTranslations, LegalLanguage } from '@/lib/legal-translations'

export default function PrivacyPolicyPage() {
  const { lang, dir } = useLanguage()
  
  // Get translations with fallback to UA if translation doesn't exist
  const getTranslation = () => {
    const currentLang = lang as LegalLanguage
    return privacyPolicyTranslations[currentLang] || privacyPolicyTranslations.ua
  }
  
  const t = getTranslation()
  
  // Format date according to current language
  const formatDate = (date: Date, locale: string) => {
    try {
      return date.toLocaleDateString(locale, {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return date.toLocaleDateString('uk-UA', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }
  }
  
  const localeMap: Record<string, string> = {
    ua: 'uk-UA',
    en: 'en-US',
    pl: 'pl-PL',
    lt: 'lt-LT',
    ge: 'ka-GE',
    ar: 'ar-SA',
  }
  return (
    <div className="min-h-screen bg-primary-darkBlue relative" dir={dir}>
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/img/hero-bg.jpg)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-primary-orange transition-colors group"
          >
            <ArrowLeft className={`h-5 w-5 transition-transform ${dir === 'rtl' ? 'group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
            <span className="font-medium">{t.backToHome}</span>
          </Link>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`max-w-4xl mx-auto glass-strong rounded-2xl p-8 sm:p-12 shadow-2xl ${dir === 'rtl' ? 'text-right' : 'text-left'}`}
          dir={dir}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-white">
            {t.title}
          </h1>
          <p className="text-white/60 text-sm mb-8">
            {t.lastUpdated}: {formatDate(new Date(), localeMap[lang] || 'uk-UA')}
          </p>

          <div className="prose prose-invert max-w-none space-y-8">
            {/* Вступ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.general.title}
              </h2>
              {t.sections.general.content.map((paragraph, idx) => (
                <p key={idx} className="text-white/80 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Які дані збираємо */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.dataCollected.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.dataCollected.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.dataCollected.items.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{item.label}</strong> — {item.description}
                  </li>
                ))}
              </ul>
            </section>

            {/* Мета збору */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.purpose.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.purpose.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.purpose.items.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{item.label}</strong> — {item.description}
                  </li>
                ))}
              </ul>
            </section>

            {/* Захист даних */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.protection.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.protection.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.protection.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Передача даних */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.thirdParty.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.thirdParty.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.thirdParty.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed">
                {t.sections.thirdParty.note}
              </p>
            </section>

            {/* Права користувача */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.rights.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.rights.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.rights.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                {t.sections.rights.contact} <a 
                  href={`mailto:${t.sections.rights.email}`} 
                  className="text-primary-orange hover:underline"
                >
                  {t.sections.rights.email}
                </a>
              </p>
            </section>

            {/* Термін зберігання */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.storage.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.storage.content}
              </p>
            </section>

            {/* Зміни в політиці */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.changes.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.changes.content}
              </p>
            </section>

            {/* Контакти */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.contact.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.contact.intro}
              </p>
              <div className="bg-white/5 rounded-lg p-6 mt-4 space-y-2">
                <p className="text-white">
                  <strong>{t.sections.contact.emailLabel}</strong>{' '}
                  <a href={`mailto:${t.sections.contact.email}`} className="text-primary-orange hover:underline">
                    {t.sections.contact.email}
                  </a>
                </p>
                <p className="text-white">
                  <strong>{t.sections.contact.phoneLabel}</strong>{' '}
                  <a href={`tel:${t.sections.contact.phone.replace(/\s/g, '')}`} className="text-primary-orange hover:underline">
                    {t.sections.contact.phone}
                  </a>
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

