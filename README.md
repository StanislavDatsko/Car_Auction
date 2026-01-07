# CarAuction Landing Page

Преміальний лендінг для програми CarAuction - персоналізованого браузера для торгів на автоаукціонах.

## Технологічний стек

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (анімації)
- **Lucide React** (іконки)
- **React Hook Form** (форми з валідацією)

## Встановлення та запуск

1. Встановіть залежності:
```bash
npm install
```

2. Запустіть dev сервер:
```bash
npm run dev
```

3. Відкрийте [http://localhost:3000](http://localhost:3000) у браузері

## Структура проекту

```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Головна сторінка
│   └── globals.css      # Глобальні стилі
└── components/
    └── landing/
        ├── Header.tsx       # Навігація
        ├── Hero.tsx         # Hero секція
        ├── VideoSection.tsx # Відео блок
        ├── Features.tsx     # Функції та переваги
        └── ContactForm.tsx  # Форма доступу
```

## Особливості

- ✅ Dark mode дизайн з glassmorphism ефектами
- ✅ Плавні анімації та переходи
- ✅ Повна адаптивність (Mobile First)
- ✅ Валідація форми
- ✅ Оптимізовані зображення Next.js
- ✅ Smooth scroll навігація

## Налаштування кольорів

Кольори налаштовані в `tailwind.config.ts` на основі логотипу:
- Primary Orange: `#EB5D1D`
- Dark Blue: `#0A1934`
- Electric Blue: `#00D9FF` (accent)
- Neon Green: `#39FF14` (accent)

# Carauction
