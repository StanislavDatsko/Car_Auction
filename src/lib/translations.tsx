// src/lib/translations.ts

export type Language = 'ua' | 'en' | 'pl' | 'lt' | 'ge' | 'ar'

export const languages = [
    { code: 'ua', name: 'UA', label: 'Українська', dir: 'ltr', font: 'font-main' },
    { code: 'en', name: 'EN', label: 'English', dir: 'ltr', font: 'font-main' },
    { code: 'pl', name: 'PL', label: 'Polski', dir: 'ltr', font: 'font-main' },
    { code: 'lt', name: 'LT', label: 'Lietuvių', dir: 'ltr', font: 'font-main' },
    { code: 'ge', name: 'GE', label: 'ქართული', dir: 'ltr', font: 'font-georgian' },
    { code: 'ar', name: 'AR', label: 'العربية', dir: 'rtl', font: 'font-arabic' },
]

export const translations = {
    ua: {
        nav: { access: 'Отримати доступ', contact: 'Контакти' },
        hero: {
            titleSuffix: '– це персоналізований браузер для торгів на автоаукціонах усього світу.',
            description: 'Авторизуйтесь у CarAuction – персоналізованому браузері для торгів на світових аукціонах.',
            button: 'Спробувати програму',
            scroll: 'Прокрутіть вниз'
        },
        form: {
            title: 'Почніть заробляти на автоаукціонах вже сьогодні',
            subtitle: 'Заповніть форму та отримайте доступ до платформи',
            successTitle: 'Дякуємо за заявку!',
            successDesc: "Ми зв'яжемося з вами найближчим часом.",
            nameLabel: "Ім'я та Прізвище",
            namePlaceholder: "Введіть ваше ім'я та прізвище",
            phoneLabel: "Номер телефону",
            emailLabel: "Email",
            businessLabel: "Чи займаєтесь ви автобізнесом?",
            submit: "Отримати доступ",
            submitting: "Відправка...",
            error: "Це поле обов'язкове"
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– швидкий і зручний спосіб придбати авто чи спецтехніку з будь-якої точки світу.',
            description: "Наша платформа об'єднує найбільші автоаукціони світу в одному зручному інтерфейсі, забезпечуючи вам швидкий доступ до тисяч автомобілів та спецтехніки з різних країн."
        },
        logistics: {
            titlePart1: 'Власна логістична',
            titlePart2: 'інфраструктура',
            description: 'Ми працюємо без посередників. Відео демонструє наш власний складський майданчик у США. Налагоджена логістика дозволяє нам контролювати авто на кожному етапі доставки та гарантувати їх збереження.',
            videoNotSupported: 'Ваш браузер не підтримує відео тег.'
        },
        features: {
            title: "Функціонал",
            subtitle: "Все, що вам потрібно для успішних торгів на світових аукціонах",
            invoiceTitle: "Оплата інвойсів — всього 1%",
            invoiceDesc: "Мінімальна комісія для максимальної вигоди",
            invoiceBtn: "Отримати доступ",
            items: {
                access: { title: "Доступ до аукціонів", desc: "В одному додатку Copart, IAAI, Impact, Manheim (США, Канада, Корея, Японія, Китай, Європа)." },
                history: { title: "Історія та перевірка", desc: "Перевірте історію автомобіля та перегляньте повну інформацію." },
                calc: { title: "Калькулятор", desc: "Розрахуйте вартість разом із доставкою з будь-якої країни." },
                tracking: { title: "Трекінг", desc: "Ви завжди знатимете, де саме знаходиться ваше авто." },
                multi: { title: "Мультизадачність", desc: "Зручна система вкладок для одночасної участі у кількох аукціонах." },
                pro: { title: "Особистий кабінет Pro", desc: "Повний контроль: історія викуплених авто, баланс, сповіщення та закладки." },
                ai: { title: "ШІ-Аналітика та Ремонт", desc: "Сервіс ШІ для пошуку та прорахунку вартості авто «під ключ»." },
                docs: { title: "Перевірка Документів", desc: "Автоматичний аналіз типів документів (Clean, Salvage, Junk тощо)." },
                carfax: { title: "Інтеграція Carfax", desc: "Прямий доступ до звітів Carfax прямо в інтерфейсі." },
                bidding: { title: "Мульти-бідінг", desc: "Одночасна участь у декількох аукціонах на одному екрані." }
            }
        },
        advantages: {
            titlePart1: "Заробляй більше",
            titlePart2: "на продажі авто",
            subtitle: "Ми надаємо інструменти та умови, щоб ви могли масштабувати свій бізнес.",
            btnPartner: "Стати партнером",
            btnOffer: "Отримати пропозицію",
            items: {
                commission: { title: "Комісія", desc: "Акаунти з комісією по лінії А (мінімальна можлива комісія)" },
                payment: { title: "Швидкість", desc: "Оплата лоту день в день 1%", actionBtn: "Отримати доступ" },
                learning: { title: "Навчання", desc: "Вчимо працювати з авто США, Європи, Китаю та Кореї" },
                support: { title: "Підтримка", desc: "Особистий менеджер допоможе в пошуку найвигідніших варіантів" },
                tracking: { title: "Трекінг", desc: "Відстеження авто в реальному часі на кожному етапі доставки" },
                security: { title: "Безпека", desc: "Страхування автомобіля та швидка компенсація" },
                collab: { title: "Співпраця", desc: "Працюємо як з фізичними, так і з юридичними особами" },
                finance: { title: "Фінанси", desc: "Фінансування у разі потреби (кредитування/розстрочка)" },
                logistics: { title: "Логістика", desc: "Власні потужності: від забору авто до прибуття на майданчик" }
            }
        },
        footer: {
            desc: "CarAuction – персоналізований браузер для торгів на автоаукціонах усього світу.",
            follow: "Слідкуйте за нами",
            rights: "Всі права захищені.",
            privacy: "Політика конфіденційності",
            terms: "Умови використання"
        }
    },
    en: {
        nav: { access: 'Get Access', contact: 'Contacts' },
        hero: {
            titleSuffix: '– is a personalized browser for bidding on car auctions worldwide.',
            description: 'Log in to CarAuction – a personalized browser for bidding on global auctions.',
            button: 'Try the program',
            scroll: 'Scroll down'
        },
        form: {
            title: 'Start earning on car auctions today',
            subtitle: 'Fill out the form to get access to the platform',
            successTitle: 'Thank you!',
            successDesc: "We will contact you shortly.",
            nameLabel: "Full Name",
            namePlaceholder: "Enter your full name",
            phoneLabel: "Phone Number",
            emailLabel: "Email",
            businessLabel: "Are you involved in auto business?",
            submit: "Get Access",
            submitting: "Sending...",
            error: "This field is required"
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– fast and convenient way to buy cars from anywhere in the world.',
            description: "Our platform unites the world's largest car auctions in one convenient interface."
        },
        logistics: {
            titlePart1: 'Own logistics',
            titlePart2: 'infrastructure',
            description: 'We work without intermediaries. The video demonstrates our own warehouse site in the USA. Established logistics allows us to control cars at every stage of delivery and guarantee their preservation.',
            videoNotSupported: 'Your browser does not support the video tag.'
        },
        features: {
            title: "Features",
            subtitle: "Everything you need for successful bidding",
            invoiceTitle: "Invoice Payment — only 1%",
            invoiceDesc: "Minimum commission for maximum benefit",
            invoiceBtn: "Get Access",
            items: {
                access: { title: "Auction Access", desc: "Copart, IAAI, Impact, Manheim (USA, Canada, Korea, Japan, China, Europe) in one app." },
                history: { title: "History & Check", desc: "Check car history and view full information." },
                calc: { title: "Calculator", desc: "Calculate cost including delivery from any country." },
                tracking: { title: "Tracking", desc: "You will always know exactly where your car is." },
                multi: { title: "Multitasking", desc: "Convenient tab system for simultaneous participation in multiple auctions." },
                pro: { title: "Pro Dashboard", desc: "Full control: purchase history, balance check, personalized notifications." },
                ai: { title: "AI Analytics", desc: "AI service for instant search and turnkey cost calculation." },
                docs: { title: "Document Check", desc: "Automatic analysis of document types (Clean, Salvage, Junk, etc.)." },
                carfax: { title: "Carfax Integration", desc: "Direct access to Carfax reports within the interface." },
                bidding: { title: "Multi-bidding", desc: "Simultaneous participation in multiple auctions on one screen." }
            }
        },
        advantages: {
            titlePart1: "Earn more",
            titlePart2: "on car sales",
            subtitle: "We provide tools and conditions to scale your business.",
            btnPartner: "Become a partner",
            btnOffer: "Get an offer",
            items: {
                commission: { title: "Commission", desc: "Accounts with Line A commission (minimum possible)" },
                payment: { title: "Speed", desc: "Lot payment same day 1%", actionBtn: "Get access" },
                learning: { title: "Education", desc: "We teach how to work with cars from USA, Europe, China, and Korea" },
                support: { title: "Support", desc: "Personal manager helps find the best options" },
                tracking: { title: "Tracking", desc: "Real-time car tracking at every delivery stage" },
                security: { title: "Security", desc: "Car insurance and fast compensation" },
                collab: { title: "Cooperation", desc: "We work with both individuals and legal entities" },
                finance: { title: "Finance", desc: "Financing if needed (credit/installments)" },
                logistics: { title: "Logistics", desc: "Own facilities: from auction pickup to arrival" }
            }
        },
        footer: {
            desc: "CarAuction – personalized browser for bidding on car auctions worldwide.",
            follow: "Follow us",
            rights: "All rights reserved.",
            privacy: "Privacy Policy",
            terms: "Terms of Use"
        }
    },
    pl: {
        nav: { access: 'Uzyskaj dostęp', contact: 'Kontakty' },
        hero: {
            titleSuffix: '– to spersonalizowana przeglądarka do licytacji na aukcjach samochodowych na całym świecie.',
            description: 'Zaloguj się do CarAuction – spersonalizowanej przeglądarki do licytacji na światowych aukcjach.',
            button: 'Wypróbuj program',
            scroll: 'Przewiń w dół'
        },
        form: {
            title: 'Zacznij zarabiać na aukcjach samochodowych już dziś',
            subtitle: 'Wypełnij formularz i uzyskaj dostęp do platformy',
            successTitle: 'Dziękujemy za zgłoszenie!',
            successDesc: "Skontaktujemy się z Państwem w najbliższym czasie.",
            nameLabel: "Imię i nazwisko",
            namePlaceholder: "Wpisz swoje imię i nazwisko",
            phoneLabel: "Numer telefonu",
            emailLabel: "Email",
            businessLabel: "Czy zajmujesz się branżą motoryzacyjną?",
            submit: "Uzyskaj dostęp",
            submitting: "Wysyłka...",
            error: "To pole jest obowiązkowe"
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– szybki i wygodny sposób na zakup samochodu lub sprzętu specjalistycznego z dowolnego miejsca na świecie.',
            description: "Nasza platforma łączy największe aukcje samochodowe świata w jednym wygodnym interfejsie, zapewniając szybki dostęp do tysięcy samochodów i sprzętu specjalistycznego z różnych krajów."
        },
        logistics: {
            titlePart1: 'Własna infrastruktura',
            titlePart2: 'logistyczna',
            description: 'Pracujemy bez pośredników. Wideo pokazuje nasz własny magazyn w USA. Ustanowiona logistyka pozwala nam kontrolować samochody na każdym etapie dostawy i gwarantować ich zachowanie.',
            videoNotSupported: 'Twoja przeglądarka nie obsługuje tagu wideo.'
        },
        features: {
            title: "Funkcjonalność",
            subtitle: "Wszystko, czego potrzebujesz, aby odnosić sukcesy na światowych aukcjach",
            invoiceTitle: "Płatność faktur — tylko 1%",
            invoiceDesc: "Minimalna prowizja dla maksymalnych korzyści",
            invoiceBtn: "Uzyskaj dostęp",
            items: {
                access: { title: "Dostęp do aukcji", desc: "W jednej aplikacji Copart, IAAI, Impact, Manheim (USA, Kanada, Korea, Japonia, Chiny, Europa)." },
                history: { title: "Historia i weryfikacja", desc: "Sprawdź historię samochodu i przejrzyj pełne informacje." },
                calc: { title: "Kalkulator", desc: "Oblicz koszt dostawy z dowolnego kraju." },
                tracking: { title: "Śledzenie", desc: "Zawsze będziesz wiedzieć, gdzie dokładnie znajduje się Twój samochód." },
                multi: { title: "Wielozadaniowość", desc: "Wygodny system zakładek umożliwiający jednoczesny udział w kilku aukcjach." },
                pro: { title: "Konto osobiste Pro", desc: "Pełna kontrola: historia wykupionych samochodów, saldo, powiadomienia i zakładki." },
                ai: { title: "Analityka AI i naprawa", desc: "Serwis AI do wyszukiwania i kalkulacji kosztów samochodu „pod klucz”." },
                docs: { title: "Sprawdzanie dokumentów", desc: "Automatyczna analiza typów dokumentów (Clean, Salvage, Junk itp.)." },
                carfax: { title: "Integracja Carfax", desc: "Bezpośredni dostęp do raportów Carfax bezpośrednio w interfejsie." },
                bidding: { title: "Multi-bidding", desc: "Jednoczesny udział w kilku aukcjach na jednym ekranie." }
            }
        },
        advantages: {
            titlePart1: "Zarabiaj więcej",
            titlePart2: "na sprzedaż samochody",
            subtitle: "Zapewniamy narzędzia i warunki, które pozwolą Ci rozwinąć swoją działalność.",
            btnPartner: "Zostań partnerem",
            btnOffer: "Otrzymaj ofertę",
            items: {
                commission: { title: "Komisja", desc: "Konta z prowizją linii A (minimalna możliwa prowizja)" },
                payment: { title: "Szybkość", desc: "Opłata za lot dzień w dzień 1%", actionBtn: "Uzyskaj dostęp" },
                learning: { title: "Edukacja", desc: "Uczymy obsługi samochodów z USA, Europy, Chin i Korei" },
                support: { title: "Wsparcie", desc: "Osobisty menedżer pomoże w znalezieniu najkorzystniejszych opcji" },
                tracking: { title: "Śledzenie", desc: "Śledzenie samochodu w czasie rzeczywistym na każdym etapie dostawy" },
                security: { title: "Bezpieczeństwo", desc: "Ubezpieczenie samochodu i szybka rekompensata" },
                collab: { title: "Współpraca", desc: "Współpracujemy zarówno z osobami fizycznymi, jak i prawnymi." },
                finance: { title: "Finanse", desc: "Finansowanie w razie potrzeby (kredytowanie/rozłożenie płatności na raty)" },
                logistics: { title: "Logistyka", desc: "Własne moce przerobowe: od odbioru samochodu do przybycia na miejsce" }
            }
        },
        footer: {
            desc: "CarAuction – spersonalizowana przeglądarka do licytacji na aukcjach samochodowych na całym świecie.",
            follow: "Śledź nas",
            rights: "Wszelkie prawa zastrzeżone.",
            privacy: "Polityka prywatności",
            terms: "Warunki użytkowania"
        }
    },
    lt: {
        nav: { access: 'Gauti prieigą', contact: 'Kontaktai' },
        hero: {
            titleSuffix: '– tai personalizuota naršyklė prekybai automobilių aukcionuose visame pasaulyje.',
            description: 'Prisijunkite prie CarAuction – personalizuotos naršyklės prekybai pasauliniuose aukcionuose.',
            button: 'Išbandyti programą',
            scroll: 'Slinkite žemyn'
        },
        form: {
            title: 'Pradėkite uždirbti iš automobilių aukcionų jau šiandien',
            subtitle: 'Užpildykite formą ir gaukite prieigą prie platformos',
            successTitle: 'Dėkojame už paraišką!',
            successDesc: "Netrukus su jumis susisieksime.",
            nameLabel: "Vardas ir Pavardė",
            namePlaceholder: "Įveskite savo vardą ir pavardę",
            phoneLabel: "Telefono numeris",
            emailLabel: "El. paštas",
            businessLabel: "Ar užsiimate automobilių verslu?",
            submit: "Gauti prieigą",
            submitting: "Siunčiama...",
            error: "Šis laukas yra privalomas"
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– greitas ir patogus būdas įsigyti automobilį ar specialiąją techniką iš bet kurio pasaulio kampelio.',
            description: "Mūsų platforma sujungia didžiausius pasaulio automobilių aukcionus viename patogiame sąsajoje, užtikrindama greitą prieigą prie tūkstančių automobilių ir specialiosios technikos iš įvairių šalių."
        },
        logistics: {
            titlePart1: 'Nuosava logistikos',
            titlePart2: 'infrastruktūra',
            description: 'Dirbame be tarpininkų. Vaizdo įrašas demonstruoja mūsų nuosavą sandėlių aikštelę JAV. Įsteigta logistika leidžia mums kontroliuoti automobilius kiekviename pristatymo etape ir garantuoti jų išsaugojimą.',
            videoNotSupported: 'Jūsų naršyklė nepalaiko vaizdo įrašo žymės.'
        },
        features: {
            title: "Funkcionalumas",
            subtitle: "Viskas, ko reikia sėkmingai prekybai pasauliniuose aukcionuose",
            invoiceTitle: "Sąskaitų apmokėjimas — tik 1%",
            invoiceDesc: "Minimalus mokestis maksimaliam pelnui",
            invoiceBtn: "Gauti prieigą",
            items: {
                access: { title: "Prieiga prie aukcionų", desc: "Vienoje programėlėje Copart, IAAI, Impact, Manheim (JAV, Kanada, Korėja, Japonija, Kinija, Europa)." },
                history: { title: "Istorija ir patikra", desc: "Patikrinkite automobilio istoriją ir peržiūrėkite visą informaciją." },
                calc: { title: "Kalkuliatorius", desc: "Apskaičiuokite kainą kartu su pristatymu iš bet kurios šalies." },
                tracking: { title: "Sekimas", desc: "Visada žinosite, kur tiksliai yra jūsų automobilis." },
                multi: { title: "Daugiafunkciškumas", desc: "Patogi skirtukų sistema vienu metu dalyvauti keliuose aukcionuose." },
                pro: { title: "Asmeninis Pro kabinetas", desc: "Pilna kontrolė: išpirktų automobilių istorija, balansas, pranešimai ir žymės." },
                ai: { title: "DI Analitika ir Remontas", desc: "DI paslauga paieškai ir automobilio kainos apskaičiavimui „iki rakto“." },
                docs: { title: "Dokumentų tikrinimas", desc: "Automatinė dokumentų tipų analizė (Clean, Salvage, Junk ir kt.)." },
                carfax: { title: "Carfax integracija", desc: "Tiesioginė prieiga prie Carfax ataskaitų tiesiai sąsajoje." },
                bidding: { title: "Multi-bidding", desc: "Vienu metu dalyvauti keliuose aukcionuose viename ekrane." }
            }
        },
        advantages: {
            titlePart1: "Uždirbk daugiau",
            titlePart2: "parduodant automobilius",
            subtitle: "Mes teikiame įrankius ir sąlygas, kad galėtumėte plėsti savo verslą.",
            btnPartner: "Tapti partneriu",
            btnOffer: "Gauti pasiūlymą",
            items: {
                commission: { title: "Komisija", desc: "Sąskaitos su komisija pagal A liniją (minimali galima komisija)" },
                payment: { title: "Greitis", desc: "Partijos apmokėjimas tą pačią dieną 1%", actionBtn: "Gauti prieigą" },
                learning: { title: "Mokymai", desc: "Mokome dirbti su automobiliais iš JAV, Europos, Kinijos ir Korėjos" },
                support: { title: "Palaikymas", desc: "Asmeninis vadybininkas padės rasti naudingiausius variantus" },
                tracking: { title: "Sekimas", desc: "Automobilio stebėjimas realiu laiku kiekviename pristatymo etape" },
                security: { title: "Saugumas", desc: "Automobilio draudimas ir greita kompensacija" },
                collab: { title: "Bendradarbiavimas", desc: "Dirbame tiek su fiziniais, tiek su juridiniais asmenimis" },
                finance: { title: "Finansai", desc: "Finansavimas prireikus (kreditavimas / išsimokėjimas)" },
                logistics: { title: "Logistika", desc: "Savo pajėgumai: nuo automobilio paėmimo iki atvykimo į aikštelę" }
            }
        },
        footer: {
            desc: "CarAuction – personalizuota naršyklė prekybai automobilių aukcionuose visame pasaulyje.",
            follow: "Sekite mus",
            rights: "Visos teisės saugomos.",
            privacy: "Privatumo politika",
            terms: "Naudojimo sąlygos"
        }
    },
    ge: {
        nav: { access: 'წვდომის მიღება', contact: 'კონტაქტები' },
        hero: {
            titleSuffix: '– ეს არის პერსონალიზებული ბრაუზერი ავტოაუქციონებზე ვაჭრობისთვის მთელ მსოფლიოში.',
            description: 'ავტორიზაცია CarAuction-ში – პერსონალიზებულ ბრაუზერში მსოფლიო აუქციონებზე ვაჭრობისთვის.',
            button: 'პროგრამის გამოცდა',
            scroll: 'გადადით ქვემოთ'
        },
        form: {
            title: 'დაიწყეთ შოვნა ავტოაუქციონებზე უკვე დღეს',
            subtitle: 'შეავსეთ ფორმა და მიიღეთ წვდომა პლატფორმაზე',
            successTitle: 'გმადლობთ განაცხადისთვის!',
            successDesc: 'უახლოეს მომავალში დაგიკავშირდებით.',
            nameLabel: 'სახელი და გვარი',
            namePlaceholder: 'შეიყვანეთ თქვენი სახელი და გვარი',
            phoneLabel: 'ტელეფონის ნომერი',
            emailLabel: 'ელ.ფოსტა',
            businessLabel: 'ეკეთებით თუ არა ავტობიზნესს?',
            submit: 'წვდომის მიღება',
            submitting: 'იგზავნება...',
            error: 'ეს ველი სავალდებულოა'
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– სწრაფი და მოსახერხებელი გზა ავტომობილის ან სპეცტექნიკის შეძენისთვის მსოფლიოს ნებისმიერი წერტილიდან.',
            description: 'ჩვენი პლატფორმა აერთიანებს მსოფლიოს უდიდეს ავტოაუქციონებს ერთ მოსახერხებელ ინტერფეისში, რაც გაძლევთ სწრაფ წვდომას ათასობით ავტომობილზე და სპეცტექნიკაზე სხვადასხვა ქვეყნიდან.'
        },
        logistics: {
            titlePart1: 'საკუთარი ლოგისტიკის',
            titlePart2: 'ინფრასტრუქტურა',
            description: 'ვმუშაობთ შუამავლების გარეშე. ვიდეო აჩვენებს ჩვენს საკუთარ საწყობს აშშ-ში. დადგენილი ლოგისტიკა საშუალებას გვაძლევს კონტროლი გავაწიოთ ავტომობილებს მიწოდების ყველა ეტაპზე და გავაუქმოთ მათი შენარჩუნება.',
            videoNotSupported: 'თქვენი ბრაუზერი არ მხარს უჭერს ვიდეო ტეგს.'
        },
        features: {
            title: 'ფუნქციონალი',
            subtitle: 'ყველაფერი, რაც გჭირდებათ წარმატებული ვაჭრობისთვის მსოფლიო აუქციონებზე',
            invoiceTitle: 'ინვოისების გადახდა — მხოლოდ 1%',
            invoiceDesc: 'მინიმალური საკომისიო მაქსიმალური სარგებლისთვის',
            invoiceBtn: 'წვდომის მიღება',
            items: {
                access: { title: 'წვდომა აუქციონებზე', desc: 'ერთ აპლიკაციაში Copart, IAAI, Impact, Manheim (აშშ, კანადა, კორეა, იაპონია, ჩინეთი, ევროპა).' },
                history: { title: 'ისტორია და შემოწმება', desc: 'შეამოწმეთ ავტომობილის ისტორია და ნახეთ სრული ინფორმაცია.' },
                calc: { title: 'კალკულატორი', desc: 'გამოთვალეთ ღირებულება მიწოდებასთან ერთად ნებისმიერი ქვეყნიდან.' },
                tracking: { title: 'თრექინგი', desc: 'ყოველთვის იცოდეთ, სად იმყოფება თქვენი ავტომობილი.' },
                multi: { title: 'მულტიტასკინგი', desc: 'მოსახერხებელი ჩანართების სისტემა ერთდროულად მონაწილეობისთვის რამდენიმე აუქციონში.' },
                pro: { title: 'პერსონალური Pro კაბინეტი', desc: 'სრული კონტროლი: გამოყიდული ავტომობილების ისტორია, ბალანსი, შეტყობინებები და სანიშნეები.' },
                ai: { title: 'AI-ანალიტიკა და რემონტი', desc: 'AI სერვისი ძებნისა და ავტომობილის ღირებულების გამოთვლისთვის „გასაღებამდე“.' },
                docs: { title: 'დოკუმენტების შემოწმება', desc: 'დოკუმენტების ტიპების ავტომატური ანალიზი (Clean, Salvage, Junk და სხვ.).' },
                carfax: { title: 'Carfax ინტეგრაცია', desc: 'პირდაპირი წვდომა Carfax ანგარიშებზე ინტერფეისში.' },
                bidding: { title: 'მულტი-ბიდინგი', desc: 'ერთდროული მონაწილეობა რამდენიმე აუქციონში ერთ ეკრანზე.' }
            }
        },
        advantages: {
            titlePart1: 'იშოვე მეტი',
            titlePart2: 'ავტომობილების გაყიდვიდან',
            subtitle: 'ჩვენ გთავაზობთ ინსტრუმენტებს და პირობებს თქვენი ბიზნესის მასშტაბირებისთვის.',
            btnPartner: 'გახდი პარტნიორი',
            btnOffer: 'მიიღე შეთავაზება',
            items: {
                commission: { title: 'საკომისიო', desc: 'ანგარიშები A ხაზის საკომისიოთი (მინიმალური შესაძლო საკომისიო)' },
                payment: { title: 'სისწრაფე', desc: 'ლოტის გადახდა იმავე დღეს 1%', actionBtn: 'წვდომის მიღება' },
                learning: { title: 'სწავლება', desc: 'ვასწავლით მუშაობას აშშ-ს, ევროპის, ჩინეთისა და კორეის ავტომობილებთან' },
                support: { title: 'მხარდაჭერა', desc: 'პერსონალური მენეჯერი დაგეხმარებათ ყველაზე მომგებიანი ვარიანტების ძებნაში' },
                tracking: { title: 'თრექინგი', desc: 'ავტომობილის თვალყურის დევნება რეალურ დროში მიწოდების ყველა ეტაპზე' },
                security: { title: 'უსაფრთხოება', desc: 'ავტომობილის დაზღვევა და სწრაფი კომპენსაცია' },
                collab: { title: 'თანამშრომლობა', desc: 'ვმუშაობთ როგორც ფიზიკურ, ასევე იურიდიულ პირებთან' },
                finance: { title: 'ფინანსები', desc: 'დაფინანსება საჭიროების შემთხვევაში (კრედიტი/განვადება)' },
                logistics: { title: 'ლოგისტიკა', desc: 'საკუთარი შესაძლებლობები: ავტომობილის აღებიდან მოედანზე ჩამოსვლამდე' }
            }
        },
        footer: {
            desc: 'CarAuction – პერსონალიზებული ბრაუზერი ავტოაუქციონებზე ვაჭრობისთვის მთელ მსოფლიოში.',
            follow: 'გაყევით ჩვენ',
            rights: 'ყველა უფლება დაცულია.',
            privacy: 'კონფიდენციალურობის პოლიტიკა',
            terms: 'გამოყენების პირობები'
        }
    },
    ar: {
        nav: { access: 'الحصول على الوصول', contact: 'جهات الاتصال' },
        hero: {
            titleSuffix: '– هو متصفح مخصص للتداول في مزادات السيارات في جميع أنحاء العالم.',
            description: 'سجل الدخول إلى CarAuction – المتصفح المخصص للتداول في المزادات العالمية.',
            button: 'تجربة التطبيق',
            scroll: 'انتقل لأسفل'
        },
        form: {
            title: 'ابدأ الربح من مزادات السيارات اليوم',
            subtitle: 'املأ النموذج واحصل على الوصول إلى المنصة',
            successTitle: 'شكراً على الطلب!',
            successDesc: 'سنتواصل معك في أقرب وقت.',
            nameLabel: 'الاسم واللقب',
            namePlaceholder: 'أدخل اسمك ولقبك',
            phoneLabel: 'رقم الهاتف',
            emailLabel: 'البريد الإلكتروني',
            businessLabel: 'هل تعمل في أعمال السيارات؟',
            submit: 'الحصول على الوصول',
            submitting: 'جاري الإرسال...',
            error: 'هذا الحقل مطلوب'
        },
        video: {
            titlePrefix: 'CarAuction',
            titleSuffix: '– طريقة سريعة ومريحة لشراء سيارة أو معدات خاصة من أي نقطة في العالم.',
            description: 'منصتنا توحد أكبر مزادات السيارات في العالم في واجهة مريحة واحدة، مما يوفر لك وصولاً سريعاً إلى آلاف السيارات والمعدات الخاصة من بلدان مختلفة.'
        },
        logistics: {
            titlePart1: 'البنية التحتية',
            titlePart2: 'اللوجستية الخاصة',
            description: 'نعمل بدون وسطاء. يوضح الفيديو موقعنا الخاص في الولايات المتحدة. تسمح لنا اللوجستيات المقررة بالتحكم في السيارات في كل مرحلة من مراحل التسليم وضمان حفظها.',
            videoNotSupported: 'متصفحك لا يدعم علامة الفيديو.'
        },
        features: {
            title: 'وظيفة',
            subtitle: 'كل ما تحتاجه للتداول الناجح في المزادات العالمية',
            invoiceTitle: 'دفع الفواتير — فقط 1%',
            invoiceDesc: 'عمولة دنيا لأقصى فائدة',
            invoiceBtn: 'الحصول على الوصول',
            items: {
                access: { title: 'الوصول إلى المزادات', desc: 'في تطبيق واحد Copart, IAAI, Impact, Manheim (الولايات المتحدة، كندا، كوريا، اليابان، الصين، أوروبا).' },
                history: { title: 'التاريخ والتحقق', desc: 'تحقق من تاريخ السيارة وعرض المعلومات الكاملة.' },
                calc: { title: 'الحاسبة', desc: 'احسب التكلفة مع التسليم من أي بلد.' },
                tracking: { title: 'التتبع', desc: 'ستعرف دائماً أين توجد سيارتك بالضبط.' },
                multi: { title: 'متعدد المهام', desc: 'نظام علامات تبويب مريح للمشاركة المتزامنة في عدة مزادات.' },
                pro: { title: 'حساب Pro الشخصي', desc: 'سيطرة كاملة: تاريخ السيارات المشتراة، الرصيد، الإشعارات والإشارات المرجعية.' },
                ai: { title: 'تحليلات الذكاء الاصطناعي والإصلاح', desc: 'خدمة الذكاء الاصطناعي للبحث وحساب تكلفة السيارة "جاهزة للاستخدام".' },
                docs: { title: 'التحقق من الوثائق', desc: 'تحليل تلقائي لأنواع الوثائق (Clean, Salvage, Junk إلخ).' },
                carfax: { title: 'تكامل Carfax', desc: 'وصول مباشر إلى تقارير Carfax مباشرة في الواجهة.' },
                bidding: { title: 'مزايدة متعددة', desc: 'المشاركة المتزامنة في عدة مزادات على شاشة واحدة.' }
            }
        },
        advantages: {
            titlePart1: 'اربح أكثر',
            titlePart2: 'من بيع السيارات',
            subtitle: 'نقدم الأدوات والشروط لتوسيع أعمالك.',
            btnPartner: 'كن شريكاً',
            btnOffer: 'احصل على عرض',
            items: {
                commission: { title: 'العمولة', desc: 'حسابات بعمولة خط A (أدنى عمولة ممكنة)' },
                payment: { title: 'السرعة', desc: 'دفع اللوت في نفس اليوم 1%', actionBtn: 'الحصول على الوصول' },
                learning: { title: 'التدريب', desc: 'نعلم العمل مع سيارات الولايات المتحدة، أوروبا، الصين وكوريا' },
                support: { title: 'الدعم', desc: 'مدير شخصي سيساعد في البحث عن الخيارات الأكثر ربحية' },
                tracking: { title: 'التتبع', desc: 'تتبع السيارة في الوقت الفعلي في كل مرحلة من التسليم' },
                security: { title: 'الأمان', desc: 'تأمين السيارة وتعويض سريع' },
                collab: { title: 'التعاون', desc: 'نعمل مع الأشخاص الطبيعيين والاعتباريين' },
                finance: { title: 'التمويل', desc: 'تمويل عند الحاجة (ائتمان/تقسيط)' },
                logistics: { title: 'اللوجستيات', desc: 'قدراتنا الخاصة: من استلام السيارة إلى الوصول إلى الساحة' }
            }
        },
        footer: {
            desc: 'CarAuction – متصفح مخصص للتداول في مزادات السيارات في جميع أنحاء العالم.',
            follow: 'تابعنا',
            rights: 'جميع الحقوق محفوظة.',
            privacy: 'سياسة الخصوصية',
            terms: 'شروط الاستخدام'
        }
    },
}