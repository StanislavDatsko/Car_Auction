'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { termsOfUseTranslations, LegalLanguage } from '@/lib/legal-translations'

export default function TermsOfUsePage() {
  const { lang, dir } = useLanguage()
  
  // Get translations with fallback to UA if translation doesn't exist
  const getTranslation = () => {
    const currentLang = lang as LegalLanguage
    const translation = termsOfUseTranslations[currentLang]
    // If translation is empty object (placeholder), use UA
    if (!translation || Object.keys(translation).length === 0) {
      return termsOfUseTranslations.ua
    }
    return translation
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

            {/* Визначення */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.definitions.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.definitions.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.definitions.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                {t.sections.definitions.note}
              </p>
            </section>

            {/* Реєстрація та доступ */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.registration.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.registration.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.registration.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                {t.sections.registration.note}
              </p>
            </section>

            {/* ВАЖЛИВО - Відмова від відповідальності */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.disclaimer.title}
              </h2>
              <div className={`bg-primary-orange/10 ${dir === 'rtl' ? 'border-r-4' : 'border-l-4'} border-primary-orange p-6 ${dir === 'rtl' ? 'rounded-l-lg' : 'rounded-r-lg'} my-6`}>
                <p className="text-white font-semibold mb-2">
                  {t.sections.disclaimer.warning}
                </p>
                <p className="text-white/90 leading-relaxed">
                  {t.sections.disclaimer.warningText}
                </p>
              </div>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.disclaimer.technical.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t.sections.disclaimer.technical.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.disclaimer.technical.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.disclaimer.defects.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t.sections.disclaimer.defects.content}
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.disclaimer.actions.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t.sections.disclaimer.actions.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.disclaimer.actions.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.disclaimer.financial.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t.sections.disclaimer.financial.content}
              </p>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.disclaimer.availability.title}
              </h3>
              <p className="text-white/80 leading-relaxed">
                {t.sections.disclaimer.availability.content}
              </p>
            </section>

            {/* Фінансові зобов'язання */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.financial.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.financial.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.financial.items.map((item, idx) => (
                  <li key={idx}>
                    <strong className="text-white">{item.label}</strong> — {item.description}
                  </li>
                ))}
              </ul>
              <p className="text-white/80 leading-relaxed mt-4">
                {t.sections.financial.note}
              </p>
            </section>

            {/* Права та обов'язки */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.rights.title}
              </h2>
              
              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.rights.company.title}
              </h3>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.rights.company.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>

              <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                {t.sections.rights.user.title}
              </h3>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.rights.user.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Інтелектуальна власність */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.intellectual.title}
              </h2>
              {t.sections.intellectual.content.map((paragraph, idx) => (
                <p key={idx} className={`text-white/80 leading-relaxed ${idx > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Обмеження відповідальності */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.liability.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.liability.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.liability.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Зміни умов */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.changes.title}
              </h2>
              {t.sections.changes.content.map((paragraph, idx) => (
                <p key={idx} className={`text-white/80 leading-relaxed ${idx > 0 ? 'mt-4' : ''}`}>
                  {paragraph}
                </p>
              ))}
            </section>

            {/* Припинення дії */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.termination.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.termination.intro}
              </p>
              <ul className={`list-disc space-y-2 text-white/80 ${dir === 'rtl' ? 'list-inside mr-4' : 'list-inside ml-4'}`}>
                {t.sections.termination.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </section>

            {/* Застосовне право */}
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white mt-8 mb-4">
                {t.sections.jurisdiction.title}
              </h2>
              <p className="text-white/80 leading-relaxed">
                {t.sections.jurisdiction.content}
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

