'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, languages, Language } from '@/lib/translations'

// Визначаємо тип одного об'єкта перекладів на основі UA версії
type TranslationType = typeof translations.ua

type LanguageContextType = {
    lang: Language
    setLang: (lang: Language) => void
    t: TranslationType
    dir: 'ltr' | 'rtl'
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLang] = useState<Language>('ua')

    useEffect(() => {
        const currentLangConfig = languages.find(l => l.code === lang)
        const dir = currentLangConfig?.dir || 'ltr'

        document.documentElement.dir = dir
        document.documentElement.lang = lang

        localStorage.setItem('app-language', lang)
    }, [lang])

    useEffect(() => {
        const savedLang = localStorage.getItem('app-language') as Language
        // Перевіряємо, чи існує така мова в нашому об'єкті translations
        if (savedLang && Object.keys(translations).includes(savedLang)) {
            setLang(savedLang)
        }
    }, [])

    // ВИПРАВЛЕННЯ ТУТ:
    const value: LanguageContextType = {
        lang,
        setLang,
        // 1. Примусово кажемо, що поточний переклад відповідає структурі UA
        t: translations[lang] as TranslationType,
        // 2. Додаємо дужки та casting для dir, щоб TS зрозумів, що це тільки 'ltr' або 'rtl'
        dir: (languages.find(l => l.code === lang)?.dir || 'ltr') as 'ltr' | 'rtl'
    }

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider')
    return context
}