import type { Metadata } from 'next'
// Імпортуємо шрифти: Основний, Арабський, Грузинський
import { Jost, Noto_Sans_Arabic, Noto_Sans_Georgian } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/context/LanguageContext'
import 'flag-icons/css/flag-icons.min.css'

// Налаштування шрифтів
const jost = Jost({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-main',
  display: 'swap'
})

const arabic = Noto_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap'
})

const georgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  variable: '--font-georgian',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'CarAuction',
  description: 'Browser for car auctions',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="uk">
      {/* Додаємо змінні шрифтів у body */}
      <body className={`${jost.variable} ${arabic.variable} ${georgian.variable} font-sans`}>
      <LanguageProvider>
        {children}
      </LanguageProvider>
      </body>
      </html>
  )
}