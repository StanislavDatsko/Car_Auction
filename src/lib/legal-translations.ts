// src/lib/legal-translations.ts

export type LegalLanguage = 'ua' | 'en' | 'pl' | 'lt' | 'ge' | 'ar'

export interface PrivacyPolicyTranslations {
  title: string
  lastUpdated: string
  backToHome: string
  sections: {
    general: {
      title: string
      content: string[]
    }
    dataCollected: {
      title: string
      intro: string
      items: Array<{ label: string; description: string }>
    }
    purpose: {
      title: string
      intro: string
      items: Array<{ label: string; description: string }>
    }
    protection: {
      title: string
      intro: string
      items: string[]
    }
    thirdParty: {
      title: string
      intro: string
      items: string[]
      note: string
    }
    rights: {
      title: string
      intro: string
      items: string[]
      contact: string
      email: string
    }
    storage: {
      title: string
      content: string
    }
    changes: {
      title: string
      content: string
    }
    contact: {
      title: string
      intro: string
      emailLabel: string
      phoneLabel: string
      email: string
      phone: string
    }
  }
}

export interface TermsOfUseTranslations {
  title: string
  lastUpdated: string
  backToHome: string
  sections: {
    general: {
      title: string
      content: string[]
    }
    definitions: {
      title: string
      intro: string
      items: string[]
      note: string
    }
    registration: {
      title: string
      intro: string
      items: string[]
      note: string
    }
    disclaimer: {
      title: string
      warning: string
      warningText: string
      technical: {
        title: string
        intro: string
        items: string[]
      }
      defects: {
        title: string
        content: string
      }
      actions: {
        title: string
        intro: string
        items: string[]
      }
      financial: {
        title: string
        content: string
      }
      availability: {
        title: string
        content: string
      }
    }
    financial: {
      title: string
      intro: string
      items: Array<{ label: string; description: string }>
      note: string
    }
    rights: {
      title: string
      company: {
        title: string
        items: string[]
      }
      user: {
        title: string
        items: string[]
      }
    }
    intellectual: {
      title: string
      content: string[]
    }
    liability: {
      title: string
      intro: string
      items: string[]
    }
    changes: {
      title: string
      content: string[]
    }
    termination: {
      title: string
      intro: string
      items: string[]
    }
    jurisdiction: {
      title: string
      content: string
    }
    contact: {
      title: string
      intro: string
      emailLabel: string
      phoneLabel: string
      email: string
      phone: string
    }
  }
}

export const privacyPolicyTranslations: Record<LegalLanguage, PrivacyPolicyTranslations> = {
  ua: {
    title: 'Політика конфіденційності',
    lastUpdated: 'Останнє оновлення',
    backToHome: 'Назад на головну',
    sections: {
      general: {
        title: '1. Загальні положення',
        content: [
          'Ця Політика конфіденційності описує, як CarAuction (далі — «Ми», «Наш сервіс») збирає, використовує, зберігає та захищає персональні дані користувачів нашого програмного забезпечення та веб-сайту.',
          'Ми цінуємо вашу конфіденційність та зобов\'язуємося захищати ваші персональні дані відповідно до вимог Закону України «Про захист персональних даних» та інших норм чинного законодавства.',
        ],
      },
      dataCollected: {
        title: '2. Персональні дані, які ми збираємо',
        intro: 'Під час використання сервісу CarAuction ми збираємо та обробляємо наступні персональні дані:',
        items: [
          {
            label: 'Ім\'я та прізвище',
            description: 'для ідентифікації користувача та персональної комунікації',
          },
          {
            label: 'Номер телефону',
            description: 'для зв\'язку з вами, надання технічної підтримки та інформування про важливі події в системі',
          },
          {
            label: 'Електронна пошта (Email)',
            description: 'для авторизації, відправки інструкцій, повідомлень про стан заявок та маркетингових матеріалів (з вашої згоди)',
          },
          {
            label: 'Статус бізнесу',
            description: 'інформація про те, чи займаєтесь ви автобізнесом, що дозволяє нам адаптувати наш сервіс під ваші потреби',
          },
          {
            label: 'Технічні дані',
            description: 'IP-адреса, тип браузера, операційна система, дані про використання програмного забезпечення (метадані) для покращення роботи сервісу',
          },
        ],
      },
      purpose: {
        title: '3. Мета збору та обробки персональних даних',
        intro: 'Ваші персональні дані використовуються нами виключно для наступних цілей:',
        items: [
          {
            label: 'Надання доступу до програмного забезпечення',
            description: 'створення облікового запису, авторизація та забезпечення функціонування браузера для торгів на автоаукціонах (Copart, IAAI, Impact, Manheim та інші)',
          },
          {
            label: 'Комунікація та підтримка',
            description: 'зв\'язок наших менеджерів з вами для надання допомоги в торгах, консультування щодо використання платформи, вирішення технічних питань',
          },
          {
            label: 'Маркетингові комунікації',
            description: 'відправка інформаційних повідомлень про нові функції, оновлення сервісу, спеціальні пропозиції та акції (тільки за вашою згодою)',
          },
          {
            label: 'Покращення сервісу',
            description: 'аналіз використання платформи для оптимізації роботи, виявлення та усунення помилок',
          },
          {
            label: 'Дотримання законодавства',
            description: 'виконання вимог законодавства України, включаючи податкове та фінансове законодавство',
          },
        ],
      },
      protection: {
        title: '4. Захист персональних даних',
        intro: 'Ми вживаємо всіх необхідних технічних та організаційних заходів для захисту ваших персональних даних від несанкціонованого доступу, втрати, знищення або зміни:',
        items: [
          'Використання сучасних методів шифрування даних (SSL/TLS)',
          'Обмежений доступ до персональних даних тільки для уповноважених працівників',
          'Регулярні оновлення систем безпеки та моніторинг захищеності інформації',
          'Резервне копіювання даних для запобігання їх втраті',
        ],
      },
      thirdParty: {
        title: '5. Передача персональних даних третім особам',
        intro: 'Ми не передаємо ваші персональні дані третім особам, окрім випадків, передбачених чинним законодавством України:',
        items: [
          'За запитом правоохоронних органів, судових інстанцій або інших уповноважених державних органів у випадках, передбачених законом',
          'Для захисту прав та безпеки користувачів, нашого сервісу або громадськості',
          'У разі реорганізації, злиття або продажу компанії (при цьому новий власник зобов\'язується дотримуватися цієї Політики конфіденційності)',
        ],
        note: 'Ми не продаємо, не здаємо в оренду та не передаємо вашу персональну інформацію для маркетингових цілей третім особам без вашої явної згоди.',
      },
      rights: {
        title: '6. Ваші права',
        intro: 'Відповідно до чинного законодавства, ви маєте право:',
        items: [
          'Отримувати інформацію про обробку ваших персональних даних',
          'Вносити зміни та оновлювати свої персональні дані',
          'Відкликати згоду на обробку персональних даних (у випадках, коли обробка базується на згоді)',
          'Вимагати видалення ваших персональних даних',
          'Обмежувати обробку ваших персональних даних',
          'Отримувати копію ваших персональних даних у структурованому форматі',
        ],
        contact: 'Для реалізації ваших прав зверніться до нас за адресою:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. Термін зберігання персональних даних',
        content: 'Ваші персональні дані зберігаються протягом терміну, необхідного для досягнення цілей їх обробки, або до моменту відкликання вами згоди на їх обробку (якщо обробка базується на згоді). Після завершення терміну зберігання дані автоматично видаляються або анонімізуються.',
      },
      changes: {
        title: '8. Зміни до Політики конфіденційності',
        content: 'Ми залишаємо за собою право вносити зміни до цієї Політики конфіденційності. Про значні зміни ми повідомимо вас через електронну пошту або повідомлення в програмному забезпеченні. Рекомендуємо періодично переглядати цю сторінку для ознайомлення з актуальною версією.',
      },
      contact: {
        title: '9. Контактна інформація',
        intro: 'З усіх питань, пов\'язаних із обробкою персональних даних та реалізацією ваших прав, ви можете звертатися до нас:',
        emailLabel: 'Email:',
        phoneLabel: 'Телефон:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  en: {
    title: 'Privacy Policy',
    lastUpdated: 'Last updated',
    backToHome: 'Back to home',
    sections: {
      general: {
        title: '1. General Provisions',
        content: [
          'This Privacy Policy describes how CarAuction (hereinafter referred to as "We", "Our Service") collects, uses, stores, and protects personal data of users of our software and website.',
          'We value your privacy and are committed to protecting your personal data in accordance with the requirements of the Law of Ukraine "On Personal Data Protection" and other applicable legal norms.',
        ],
      },
      dataCollected: {
        title: '2. Personal Data We Collect',
        intro: 'When using the CarAuction service, we collect and process the following personal data:',
        items: [
          {
            label: 'Full Name',
            description: 'for user identification and personal communication',
          },
          {
            label: 'Phone Number',
            description: 'to contact you, provide technical support, and inform you about important events in the system',
          },
          {
            label: 'Email Address',
            description: 'for authorization, sending instructions, notifications about application status, and marketing materials (with your consent)',
          },
          {
            label: 'Business Status',
            description: 'information about whether you are engaged in auto business, which allows us to adapt our service to your needs',
          },
          {
            label: 'Technical Data',
            description: 'IP address, browser type, operating system, software usage data (metadata) to improve service performance',
          },
        ],
      },
      purpose: {
        title: '3. Purpose of Collection and Processing of Personal Data',
        intro: 'Your personal data is used by us exclusively for the following purposes:',
        items: [
          {
            label: 'Providing Access to Software',
            description: 'creating an account, authorization, and ensuring the operation of the browser for trading on auto auctions (Copart, IAAI, Impact, Manheim, and others)',
          },
          {
            label: 'Communication and Support',
            description: 'contact between our managers and you to provide assistance in trading, consultation on platform usage, and resolution of technical issues',
          },
          {
            label: 'Marketing Communications',
            description: 'sending informational messages about new features, service updates, special offers, and promotions (only with your consent)',
          },
          {
            label: 'Service Improvement',
            description: 'analysis of platform usage to optimize work, identify and eliminate errors',
          },
          {
            label: 'Compliance with Legislation',
            description: 'fulfillment of requirements of Ukrainian legislation, including tax and financial legislation',
          },
        ],
      },
      protection: {
        title: '4. Protection of Personal Data',
        intro: 'We take all necessary technical and organizational measures to protect your personal data from unauthorized access, loss, destruction, or modification:',
        items: [
          'Use of modern data encryption methods (SSL/TLS)',
          'Limited access to personal data only for authorized employees',
          'Regular security system updates and monitoring of information security',
          'Data backup to prevent loss',
        ],
      },
      thirdParty: {
        title: '5. Transfer of Personal Data to Third Parties',
        intro: 'We do not transfer your personal data to third parties, except in cases provided for by applicable Ukrainian legislation:',
        items: [
          'Upon request from law enforcement agencies, judicial authorities, or other authorized government bodies in cases provided for by law',
          'To protect the rights and security of users, our service, or the public',
          'In case of reorganization, merger, or sale of the company (in this case, the new owner is obliged to comply with this Privacy Policy)',
        ],
        note: 'We do not sell, rent, or transfer your personal information for marketing purposes to third parties without your explicit consent.',
      },
      rights: {
        title: '6. Your Rights',
        intro: 'In accordance with applicable legislation, you have the right to:',
        items: [
          'Receive information about the processing of your personal data',
          'Make changes and update your personal data',
          'Withdraw consent to the processing of personal data (in cases where processing is based on consent)',
          'Request deletion of your personal data',
          'Restrict the processing of your personal data',
          'Receive a copy of your personal data in a structured format',
        ],
        contact: 'To exercise your rights, please contact us at:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. Retention Period of Personal Data',
        content: 'Your personal data is stored for the period necessary to achieve the purposes of their processing, or until you withdraw consent to their processing (if processing is based on consent). After the retention period expires, data is automatically deleted or anonymized.',
      },
      changes: {
        title: '8. Changes to Privacy Policy',
        content: 'We reserve the right to make changes to this Privacy Policy. We will notify you of significant changes via email or a message in the software. We recommend periodically reviewing this page to familiarize yourself with the current version.',
      },
      contact: {
        title: '9. Contact Information',
        intro: 'For all questions related to personal data processing and the exercise of your rights, you can contact us:',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  pl: {
    title: 'Polityka prywatności',
    lastUpdated: 'Ostatnia aktualizacja',
    backToHome: 'Powrót do strony głównej',
    sections: {
      general: {
        title: '1. Postanowienia ogólne',
        content: [
          'Niniejsza Polityka prywatności opisuje, w jaki sposób CarAuction (zwane dalej „My", „Nasza usługa") zbiera, wykorzystuje, przechowuje i chroni dane osobowe użytkowników naszego oprogramowania i strony internetowej.',
          'Cenimy Twoją prywatność i zobowiązujemy się chronić Twoje dane osobowe zgodnie z wymogami ustawy Ukrainy „O ochronie danych osobowych" oraz innych obowiązujących norm prawnych.',
        ],
      },
      dataCollected: {
        title: '2. Dane osobowe, które zbieramy',
        intro: 'Podczas korzystania z usługi CarAuction zbieramy i przetwarzamy następujące dane osobowe:',
        items: [
          {
            label: 'Imię i nazwisko',
            description: 'do identyfikacji użytkownika i komunikacji osobistej',
          },
          {
            label: 'Numer telefonu',
            description: 'do kontaktu z Tobą, świadczenia wsparcia technicznego oraz informowania o ważnych wydarzeniach w systemie',
          },
          {
            label: 'Adres e-mail',
            description: 'do autoryzacji, wysyłania instrukcji, powiadomień o statusie wniosków oraz materiałów marketingowych (za Twoją zgodą)',
          },
          {
            label: 'Status biznesowy',
            description: 'informacje o tym, czy zajmujesz się biznesem motoryzacyjnym, co pozwala nam dostosować naszą usługę do Twoich potrzeb',
          },
          {
            label: 'Dane techniczne',
            description: 'adres IP, typ przeglądarki, system operacyjny, dane o korzystaniu z oprogramowania (metadane) w celu poprawy działania usługi',
          },
        ],
      },
      purpose: {
        title: '3. Cel zbierania i przetwarzania danych osobowych',
        intro: 'Twoje dane osobowe są wykorzystywane przez nas wyłącznie w następujących celach:',
        items: [
          {
            label: 'Udzielanie dostępu do oprogramowania',
            description: 'tworzenie konta, autoryzacja oraz zapewnienie funkcjonowania przeglądarki do handlu na aukcjach samochodowych (Copart, IAAI, Impact, Manheim i inne)',
          },
          {
            label: 'Komunikacja i wsparcie',
            description: 'kontakt naszych menedżerów z Tobą w celu świadczenia pomocy w handlu, konsultacji dotyczących korzystania z platformy oraz rozwiązywania problemów technicznych',
          },
          {
            label: 'Komunikacja marketingowa',
            description: 'wysyłanie wiadomości informacyjnych o nowych funkcjach, aktualizacjach usługi, specjalnych ofertach i promocjach (tylko za Twoją zgodą)',
          },
          {
            label: 'Poprawa usługi',
            description: 'analiza korzystania z platformy w celu optymalizacji pracy, wykrywania i eliminowania błędów',
          },
          {
            label: 'Zgodność z przepisami',
            description: 'wykonanie wymogów prawodawstwa ukraińskiego, w tym przepisów podatkowych i finansowych',
          },
        ],
      },
      protection: {
        title: '4. Ochrona danych osobowych',
        intro: 'Podejmujemy wszelkie niezbędne środki techniczne i organizacyjne w celu ochrony Twoich danych osobowych przed nieuprawnionym dostępem, utratą, zniszczeniem lub modyfikacją:',
        items: [
          'Stosowanie nowoczesnych metod szyfrowania danych (SSL/TLS)',
          'Ograniczony dostęp do danych osobowych tylko dla upoważnionych pracowników',
          'Regularne aktualizacje systemów bezpieczeństwa i monitorowanie bezpieczeństwa informacji',
          'Tworzenie kopii zapasowych danych w celu zapobieżenia ich utracie',
        ],
      },
      thirdParty: {
        title: '5. Przekazywanie danych osobowych osobom trzecim',
        intro: 'Nie przekazujemy Twoich danych osobowych osobom trzecim, z wyjątkiem przypadków przewidzianych przez obowiązujące prawodawstwo ukraińskie:',
        items: [
          'Na żądanie organów ścigania, władz sądowych lub innych upoważnionych organów państwowych w przypadkach przewidzianych prawem',
          'W celu ochrony praw i bezpieczeństwa użytkowników, naszej usługi lub społeczeństwa',
          'W przypadku reorganizacji, fuzji lub sprzedaży firmy (w takim przypadku nowy właściciel zobowiązuje się przestrzegać niniejszej Polityki prywatności)',
        ],
        note: 'Nie sprzedajemy, nie wynajmujemy ani nie przekazujemy Twoich danych osobowych w celach marketingowych osobom trzecim bez Twojej wyraźnej zgody.',
      },
      rights: {
        title: '6. Twoje prawa',
        intro: 'Zgodnie z obowiązującymi przepisami, masz prawo do:',
        items: [
          'Otrzymywania informacji o przetwarzaniu Twoich danych osobowych',
          'Wprowadzania zmian i aktualizowania swoich danych osobowych',
          'Wycofania zgody na przetwarzanie danych osobowych (w przypadkach, gdy przetwarzanie opiera się na zgodzie)',
          'Żądania usunięcia Twoich danych osobowych',
          'Ograniczenia przetwarzania Twoich danych osobowych',
          'Otrzymywania kopii Twoich danych osobowych w ustrukturyzowanym formacie',
        ],
        contact: 'Aby skorzystać ze swoich praw, skontaktuj się z nami pod adresem:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. Okres przechowywania danych osobowych',
        content: 'Twoje dane osobowe są przechowywane przez okres niezbędny do osiągnięcia celów ich przetwarzania lub do momentu wycofania przez Ciebie zgody na ich przetwarzanie (jeśli przetwarzanie opiera się na zgodzie). Po upływie okresu przechowywania dane są automatycznie usuwane lub anonimizowane.',
      },
      changes: {
        title: '8. Zmiany w Polityce prywatności',
        content: 'Zastrzegamy sobie prawo do wprowadzania zmian w niniejszej Polityce prywatności. O znaczących zmianach poinformujemy Cię poprzez e-mail lub wiadomość w oprogramowaniu. Zalecamy okresowe przeglądanie tej strony w celu zapoznania się z aktualną wersją.',
      },
      contact: {
        title: '9. Informacje kontaktowe',
        intro: 'We wszystkich sprawach związanych z przetwarzaniem danych osobowych i realizacją Twoich praw, możesz skontaktować się z nami:',
        emailLabel: 'E-mail:',
        phoneLabel: 'Telefon:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  lt: {
    title: 'Privatumo politika',
    lastUpdated: 'Paskutinis atnaujinimas',
    backToHome: 'Atgal į pagrindinį',
    sections: {
      general: {
        title: '1. Bendrosios nuostatos',
        content: [
          'Ši Privatumo politika aprašo, kaip CarAuction (toliau – „Mes", „Mūsų paslauga") renka, naudoja, saugo ir apsaugo asmens duomenis mūsų programinės įrangos ir svetainės vartotojų.',
          'Mes vertiname jūsų privatumą ir įsipareigojame apsaugoti jūsų asmens duomenis pagal Ukrainos įstatymo „Dėl asmens duomenų apsaugos" reikalavimus ir kitas galiojančias teisines normas.',
        ],
      },
      dataCollected: {
        title: '2. Asmens duomenys, kuriuos renkame',
        intro: 'Naudojantis CarAuction paslauga, mes renkame ir apdorojame šiuos asmens duomenis:',
        items: [
          {
            label: 'Vardas ir pavardė',
            description: 'vartotojo identifikavimui ir asmeniniam bendravimui',
          },
          {
            label: 'Telefono numeris',
            description: 'susisiekti su jumis, teikti techninę pagalbą ir informuoti apie svarbius įvykius sistemoje',
          },
          {
            label: 'El. pašto adresas',
            description: 'autorizacijai, siųsti instrukcijas, pranešimus apie paraiškų būklę ir rinkodaros medžiagą (su jūsų sutikimu)',
          },
          {
            label: 'Verslo statusas',
            description: 'informacija apie tai, ar užsiimate automobilių verslu, o tai leidžia mums pritaikyti mūsų paslaugą jūsų poreikiams',
          },
          {
            label: 'Techniniai duomenys',
            description: 'IP adresas, naršyklės tipas, operacinė sistema, duomenys apie programinės įrangos naudojimą (metaduomenys) paslaugos veikimo gerinimui',
          },
        ],
      },
      purpose: {
        title: '3. Asmens duomenų rinkimo ir apdorojimo tikslas',
        intro: 'Jūsų asmens duomenys naudojami mūsų išimtinai šiems tikslams:',
        items: [
          {
            label: 'Prieigos prie programinės įrangos teikimas',
            description: 'paskyros sukūrimas, autorizacija ir naršyklės veikimo užtikrinimas prekybai automobilių aukcionuose (Copart, IAAI, Impact, Manheim ir kt.)',
          },
          {
            label: 'Bendravimas ir pagalba',
            description: 'mūsų vadovų kontaktas su jumis teikti pagalbą prekyboje, konsultacijoms dėl platformos naudojimo ir techninių problemų sprendimui',
          },
          {
            label: 'Rinkodaros komunikacija',
            description: 'informacinių pranešimų siuntimas apie naujas funkcijas, paslaugos atnaujinimus, specialius pasiūlymus ir akcijas (tik su jūsų sutikimu)',
          },
          {
            label: 'Paslaugos gerinimas',
            description: 'platformos naudojimo analizė darbo optimizavimui, klaidų nustatymui ir pašalinimui',
          },
          {
            label: 'Teisės aktų laikymasis',
            description: 'Ukrainos teisės aktų reikalavimų įvykdymas, įskaitant mokesčių ir finansų teisės aktus',
          },
        ],
      },
      protection: {
        title: '4. Asmens duomenų apsauga',
        intro: 'Mes imamės visų reikalingų techninių ir organizacinių priemonių apsaugoti jūsų asmens duomenis nuo neteisėto prieigos, praradimo, sunaikinimo ar pakeitimo:',
        items: [
          'Šiuolaikinių duomenų šifravimo metodų naudojimas (SSL/TLS)',
          'Ribotas prieiga prie asmens duomenų tik autorizuotiems darbuotojams',
          'Reguliarūs saugos sistemų atnaujinimai ir informacijos saugumo stebėjimas',
          'Duomenų atsarginė kopija praradimui išvengti',
        ],
      },
      thirdParty: {
        title: '5. Asmens duomenų perdavimas trečiosioms šalims',
        intro: 'Mes neperduodame jūsų asmens duomenų trečiosioms šalims, išskyrus atvejus, numatytus galiojančiais Ukrainos teisės aktais:',
        items: [
          'Pagal teisėsaugos institucijų, teismų ar kitų įgaliotų valstybės institucijų prašymą įstatymo numatytais atvejais',
          'Apsaugoti vartotojų, mūsų paslaugos ar visuomenės teises ir saugumą',
          'Įmonės reorganizavimo, susijungimo ar pardavimo atveju (šiuo atveju naujas savininkas įsipareigoja laikytis šios Privatumo politikos)',
        ],
        note: 'Mes neparduodame, neišnuomojame ir neperduodame jūsų asmeninės informacijos rinkodaros tikslams trečiosioms šalims be jūsų aiškaus sutikimo.',
      },
      rights: {
        title: '6. Jūsų teisės',
        intro: 'Pagal galiojančius teisės aktus turite teisę:',
        items: [
          'Gauti informaciją apie jūsų asmens duomenų apdorojimą',
          'Koreguoti ir atnaujinti savo asmens duomenis',
          'Atsisakyti sutikimo apdoroti asmens duomenis (tais atvejais, kai apdorojimas grindžiamas sutikimu)',
          'Reikalauti pašalinti jūsų asmens duomenis',
          'Apriboti jūsų asmens duomenų apdorojimą',
          'Gauti jūsų asmens duomenų kopiją struktūruotu formatu',
        ],
        contact: 'Norėdami įgyvendinti savo teises, susisiekite su mumis:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. Asmens duomenų saugojimo terminas',
        content: 'Jūsų asmens duomenys saugomi per laikotarpį, reikalingą pasiekti jų apdorojimo tikslus, arba iki sutikimo atsisakymo jų apdorojimui (jei apdorojimas grindžiamas sutikimu). Baigiantis saugojimo terminui, duomenys automatiškai pašalinami arba anonimiški.',
      },
      changes: {
        title: '8. Privatumo politikos pakeitimai',
        content: 'Mes pasiliekame teisę koreguoti šią Privatumo politiką. Apie reikšmingus pakeitimus pranešime jums el. paštu arba pranešimu programinėje įrangoje. Rekomenduojame periodiškai peržiūrėti šį puslapį, kad susipažintumėte su dabartine versija.',
      },
      contact: {
        title: '9. Kontaktinė informacija',
        intro: 'Dėl visų klausimų, susijusių su asmens duomenų apdorojimu ir jūsų teisių įgyvendinimu, galite susisiekti su mumis:',
        emailLabel: 'El. paštas:',
        phoneLabel: 'Telefonas:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  ge: {
    title: 'კონფიდენციალურობის პოლიტიკა',
    lastUpdated: 'ბოლო განახლება',
    backToHome: 'მთავარზე დაბრუნება',
    sections: {
      general: {
        title: '1. ზოგადი დებულებები',
        content: [
          'ეს კონფიდენციალურობის პოლიტიკა აღწერს, თუ როგორ აგროვებს, იყენებს, ინახავს და იცავს CarAuction (შემდგომში – „ჩვენ", „ჩვენი სერვისი") ჩვენი პროგრამული უზრუნველყოფისა და ვებ-საიტის მომხმარებლების პირად მონაცემებს.',
          'ჩვენ ვაფასებთ თქვენს კონფიდენციალურობას და ვიღებთ ვალდებულებას დავიცვათ თქვენი პირადი მონაცემები უკრაინის კანონის „პირადი მონაცემების დაცვის შესახებ" მოთხოვნებისა და სხვა მოქმედი კანონმდებლობის ნორმების შესაბამისად.',
        ],
      },
      dataCollected: {
        title: '2. პირადი მონაცემები, რომლებსაც ვაგროვებთ',
        intro: 'CarAuction სერვისის გამოყენებისას ვაგროვებთ და ვამუშავებთ შემდეგ პირად მონაცემებს:',
        items: [
          {
            label: 'სახელი და გვარი',
            description: 'მომხმარებლის იდენტიფიკაციისა და პირადი კომუნიკაციისთვის',
          },
          {
            label: 'ტელეფონის ნომერი',
            description: 'თქვენთან დასაკავშირებლად, ტექნიკური მხარდაჭერის მიწოდებისა და სისტემაში მნიშვნელოვანი მოვლენების შესახებ ინფორმირებისთვის',
          },
          {
            label: 'ელ. ფოსტის მისამართი',
            description: 'ავტორიზაციისთვის, ინსტრუქციების გაგზავნისთვის, განაცხადების სტატუსის შესახებ შეტყობინებებისა და მარკეტინგული მასალებისთვის (თქვენი თანხმობით)',
          },
          {
            label: 'ბიზნეს სტატუსი',
            description: 'ინფორმაცია იმის შესახებ, უკეთებთ თუ არა ავტობიზნესს, რაც საშუალებას გვაძლევს ავდაოსტიროთ ჩვენი სერვისი თქვენს საჭიროებებს',
          },
          {
            label: 'ტექნიკური მონაცემები',
            description: 'IP მისამართი, ბრაუზერის ტიპი, ოპერაციული სისტემა, პროგრამული უზრუნველყოფის გამოყენების მონაცემები (მეტამონაცემები) სერვისის მუშაობის გასაუმჯობესებლად',
          },
        ],
      },
      purpose: {
        title: '3. პირადი მონაცემების შეგროვებისა და დამუშავების მიზანი',
        intro: 'თქვენი პირადი მონაცემები ჩვენ მიერ გამოიყენება ექსკლუზიურად შემდეგი მიზნებისთვის:',
        items: [
          {
            label: 'პროგრამულ უზრუნველყოფაზე წვდომის მიწოდება',
            description: 'ანგარიშის შექმნა, ავტორიზაცია და ბრაუზერის ფუნქციონირების უზრუნველყოფა ავტოაუქციონებზე ვაჭრობისთვის (Copart, IAAI, Impact, Manheim და სხვები)',
          },
          {
            label: 'კომუნიკაცია და მხარდაჭერა',
            description: 'ჩვენი მენეჯერების კონტაქტი თქვენთან დახმარების მიწოდებისთვის ვაჭრობაში, პლატფორმის გამოყენებაზე კონსულტაციისთვის და ტექნიკური საკითხების გადაწყვეტისთვის',
          },
          {
            label: 'მარკეტინგული კომუნიკაცია',
            description: 'ინფორმაციული შეტყობინებების გაგზავნა ახალ ფუნქციებზე, სერვისის განახლებებზე, სპეციალურ შეთავაზებებზე და აქციებზე (მხოლოდ თქვენი თანხმობით)',
          },
          {
            label: 'სერვისის გაუმჯობესება',
            description: 'პლატფორმის გამოყენების ანალიზი მუშაობის ოპტიმიზაციისთვის, შეცდომების გამოვლენისა და აღმოფხვრისთვის',
          },
          {
            label: 'კანონმდებლობის დაცვა',
            description: 'უკრაინის კანონმდებლობის მოთხოვნების შესრულება, მათ შორის საგადასახადო და ფინანსური კანონმდებლობის',
          },
        ],
      },
      protection: {
        title: '4. პირადი მონაცემების დაცვა',
        intro: 'ვიღებთ ყველა აუცილებელ ტექნიკურ და ორგანიზაციულ ზომას თქვენი პირადი მონაცემების დასაცავად არასანქცირებული წვდომისგან, დაკარგვისგან, განადგურებისგან ან შეცვლისგან:',
        items: [
          'თანამედროვე მონაცემების დაშიფვრის მეთოდების გამოყენება (SSL/TLS)',
          'პირადი მონაცემებზე შეზღუდული წვდომა მხოლოდ დაუფლებულ თანამშრომლებზე',
          'უსაფრთხოების სისტემების რეგულარული განახლებები და ინფორმაციის უსაფრთხოების მონიტორინგი',
          'მონაცემების სარეზერვო ასლი მათი დაკარგვის თავიდან ასაცილებლად',
        ],
      },
      thirdParty: {
        title: '5. პირადი მონაცემების გადაცემა მესამე მხარეებზე',
        intro: 'ჩვენ არ ვაძლევთ თქვენს პირად მონაცემებს მესამე მხარეებზე, გარდა მოქმედი უკრაინის კანონმდებლობით გათვალისწინებული შემთხვევებისა:',
        items: [
          'სამართალდამცავი ორგანოების, სასამართლო ინსტანციების ან სხვა დაუფლებული სახელმწიფო ორგანოების მოთხოვნით კანონით გათვალისწინებულ შემთხვევებში',
          'მომხმარებლების, ჩვენი სერვისისა და საზოგადოების უფლებებისა და უსაფრთხოების დასაცავად',
          'კომპანიის რეორგანიზაციის, შერწყმის ან გაყიდვის შემთხვევაში (ამ შემთხვევაში ახალი მფლობელი იღებს ვალდებულებას დაეცვას ეს კონფიდენციალურობის პოლიტიკა)',
        ],
        note: 'ჩვენ არ ვყიდით, არ ვიჯარით ვაძლევთ და არ ვაძლევთ თქვენს პირად ინფორმაციას მარკეტინგული მიზნებისთვის მესამე მხარეებზე თქვენი აშკარა თანხმობის გარეშე.',
      },
      rights: {
        title: '6. თქვენი უფლებები',
        intro: 'მოქმედი კანონმდებლობის შესაბამისად, თქვენ გაქვთ უფლება:',
        items: [
          'მიიღოთ ინფორმაცია თქვენი პირადი მონაცემების დამუშავების შესახებ',
          'შეიტანოთ ცვლილებები და განაახლოთ თქვენი პირადი მონაცემები',
          'გააუქმოთ თანხმობა პირადი მონაცემების დამუშავებაზე (იმ შემთხვევებში, როდესაც დამუშავება დაფუძნებულია თანხმობაზე)',
          'მოითხოვოთ თქვენი პირადი მონაცემების წაშლა',
          'შეზღუდოთ თქვენი პირადი მონაცემების დამუშავება',
          'მიიღოთ თქვენი პირადი მონაცემების ასლი სტრუქტურულ ფორმატში',
        ],
        contact: 'თქვენი უფლებების განსახორციელებლად, დაგვიკავშირდით:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. პირადი მონაცემების შენახვის ვადა',
        content: 'თქვენი პირადი მონაცემები ინახება იმ პერიოდის განმავლობაში, რაც აუცილებელია მათი დამუშავების მიზნების მისაღწევად, ან თანხმობის გაუქმებამდე მათ დამუშავებაზე (თუ დამუშავება დაფუძნებულია თანხმობაზე). შენახვის ვადის დასრულების შემდეგ მონაცემები ავტომატურად წაიშლება ან ანონიმიზდება.',
      },
      changes: {
        title: '8. კონფიდენციალურობის პოლიტიკის ცვლილებები',
        content: 'ჩვენ ვიტოვებთ უფლებას შევიტანოთ ცვლილებები ამ კონფიდენციალურობის პოლიტიკაში. მნიშვნელოვან ცვლილებებზე გაგაცნობთ ელ. ფოსტით ან შეტყობინებით პროგრამულ უზრუნველყოფაში. გირჩევთ პერიოდულად გადაამოწმოთ ეს გვერდი, რათა გაეცნოთ არსებულ ვერსიას.',
      },
      contact: {
        title: '9. საკონტაქტო ინფორმაცია',
        intro: 'ყველა კითხვაზე, რომელიც დაკავშირებულია პირადი მონაცემების დამუშავებასთან და თქვენი უფლებების განხორციელებასთან, შეგიძლიათ დაგვიკავშირდეთ:',
        emailLabel: 'ელ. ფოსტა:',
        phoneLabel: 'ტელეფონი:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  ar: {
    title: 'سياسة الخصوصية',
    lastUpdated: 'آخر تحديث',
    backToHome: 'العودة إلى الصفحة الرئيسية',
    sections: {
      general: {
        title: '1. الأحكام العامة',
        content: [
          'تصف سياسة الخصوصية هذه كيف يجمع CarAuction (المشار إليه فيما يلي باسم "نحن"، "خدمتنا") ويستخدم ويخزن ويحمي البيانات الشخصية لمستخدمي برنامجنا وموقعنا الإلكتروني.',
          'نحن نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية وفقاً لمتطلبات قانون أوكرانيا "حول حماية البيانات الشخصية" والمعايير القانونية الأخرى المعمول بها.',
        ],
      },
      dataCollected: {
        title: '2. البيانات الشخصية التي نجمعها',
        intro: 'عند استخدام خدمة CarAuction، نجمع ونعالج البيانات الشخصية التالية:',
        items: [
          {
            label: 'الاسم الكامل',
            description: 'لتحديد هوية المستخدم والتواصل الشخصي',
          },
          {
            label: 'رقم الهاتف',
            description: 'للتواصل معك وتقديم الدعم الفني وإعلامك بالأحداث المهمة في النظام',
          },
          {
            label: 'عنوان البريد الإلكتروني',
            description: 'للتفويض وإرسال التعليمات والإشعارات حول حالة الطلبات والمواد التسويقية (بموافقتك)',
          },
          {
            label: 'حالة الأعمال',
            description: 'معلومات حول ما إذا كنت تعمل في مجال السيارات، مما يسمح لنا بتكييف خدمتنا وفقاً لاحتياجاتك',
          },
          {
            label: 'البيانات التقنية',
            description: 'عنوان IP ونوع المتصفح ونظام التشغيل وبيانات استخدام البرنامج (البيانات الوصفية) لتحسين أداء الخدمة',
          },
        ],
      },
      purpose: {
        title: '3. الغرض من جمع ومعالجة البيانات الشخصية',
        intro: 'تستخدم بياناتك الشخصية حصرياً للأغراض التالية:',
        items: [
          {
            label: 'توفير الوصول إلى البرنامج',
            description: 'إنشاء حساب والتفويض وضمان عمل المتصفح للتداول في مزادات السيارات (Copart, IAAI, Impact, Manheim وغيرها)',
          },
          {
            label: 'الاتصال والدعم',
            description: 'اتصال مديرينا معك لتقديم المساعدة في التداول واستشارة حول استخدام المنصة وحل المشاكل التقنية',
          },
          {
            label: 'الاتصالات التسويقية',
            description: 'إرسال رسائل إعلامية حول الميزات الجديدة وتحديثات الخدمة والعروض الخاصة والترويج (فقط بموافقتك)',
          },
          {
            label: 'تحسين الخدمة',
            description: 'تحليل استخدام المنصة لتحسين العمل وتحديد الأخطاء وإصلاحها',
          },
          {
            label: 'الامتثال للتشريع',
            description: 'تنفيذ متطلبات تشريع أوكرانيا، بما في ذلك التشريعات الضريبية والمالية',
          },
        ],
      },
      protection: {
        title: '4. حماية البيانات الشخصية',
        intro: 'نتخذ جميع التدابير التقنية والتنظيمية اللازمة لحماية بياناتك الشخصية من الوصول غير المصرح به أو الفقدان أو التدمير أو التعديل:',
        items: [
          'استخدام طرق التشفير الحديثة للبيانات (SSL/TLS)',
          'الوصول المحدود إلى البيانات الشخصية فقط للموظفين المخولين',
          'التحديثات المنتظمة لأنظمة الأمان ومراقبة أمن المعلومات',
          'النسخ الاحتياطي للبيانات لمنع فقدانها',
        ],
      },
      thirdParty: {
        title: '5. نقل البيانات الشخصية إلى أطراف ثالثة',
        intro: 'لا ننقل بياناتك الشخصية إلى أطراف ثالثة، باستثناء الحالات المنصوص عليها في التشريع الأوكراني المعمول به:',
        items: [
          'بطلب من وكالات إنفاذ القانون أو السلطات القضائية أو الهيئات الحكومية المصرح لها الأخرى في الحالات المنصوص عليها في القانون',
          'لحماية حقوق وأمن المستخدمين وخدمتنا أو الجمهور',
          'في حالة إعادة التنظيم أو الدمج أو بيع الشركة (في هذه الحالة يلتزم المالك الجديد بالامتثال لسياسة الخصوصية هذه)',
        ],
        note: 'لا نبيع أو نؤجر أو ننقل معلوماتك الشخصية للأغراض التسويقية لأطراف ثالثة دون موافقتك الصريحة.',
      },
      rights: {
        title: '6. حقوقك',
        intro: 'وفقاً للتشريع المعمول به، يحق لك:',
        items: [
          'الحصول على معلومات حول معالجة بياناتك الشخصية',
          'إجراء التغييرات وتحديث بياناتك الشخصية',
          'سحب الموافقة على معالجة البيانات الشخصية (في الحالات التي تستند فيها المعالجة إلى الموافقة)',
          'طلب حذف بياناتك الشخصية',
          'تقييد معالجة بياناتك الشخصية',
          'الحصول على نسخة من بياناتك الشخصية بتنسيق منظم',
        ],
        contact: 'لممارسة حقوقك، يرجى الاتصال بنا على:',
        email: 'info@carauction.com',
      },
      storage: {
        title: '7. فترة الاحتفاظ بالبيانات الشخصية',
        content: 'يتم الاحتفاظ ببياناتك الشخصية طوال الفترة اللازمة لتحقيق أهداف معالجتها، أو حتى تقوم بسحب الموافقة على معالجتها (إذا كانت المعالجة تستند إلى الموافقة). بعد انتهاء فترة الاحتفاظ، يتم حذف البيانات تلقائياً أو إخفاء هويتها.',
      },
      changes: {
        title: '8. التغييرات في سياسة الخصوصية',
        content: 'نحتفظ بالحق في إجراء تغييرات على سياسة الخصوصية هذه. سنخطرك بالتغييرات الكبيرة عبر البريد الإلكتروني أو رسالة في البرنامج. نوصي بمراجعة هذه الصفحة دورياً للتعرف على النسخة الحالية.',
      },
      contact: {
        title: '9. معلومات الاتصال',
        intro: 'لجميع الأسئلة المتعلقة بمعالجة البيانات الشخصية وممارسة حقوقك، يمكنك الاتصال بنا:',
        emailLabel: 'البريد الإلكتروني:',
        phoneLabel: 'الهاتف:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
}

// Terms of Use Translations
// Store UA translation first to use as fallback
const termsOfUseUA: TermsOfUseTranslations = {
    title: 'Умови використання',
    lastUpdated: 'Останнє оновлення',
    backToHome: 'Назад на головну',
    sections: {
      general: {
        title: '1. Загальні положення',
        content: [
          'Ці Умови використання (далі — «Умови») регулюють відносини між CarAuction (далі — «Ми», «Наш сервіс», «Компанія») та користувачами нашого програмного забезпечення та веб-сайту (далі — «Ви», «Користувач»).',
          'Використовуючи програмне забезпечення CarAuction, ви підтверджуєте, що прочитали, зрозуміли та згодні дотримуватися всіх положень цих Умов. Якщо ви не згодні з цими Умовами, будь ласка, не використовуйте наш сервіс.',
        ],
      },
      definitions: {
        title: '2. Визначення термінів',
        intro: 'CarAuction — це програмне забезпечення (браузер/інтерфейс), яке надає користувачам доступ до світових автоаукціонів, включаючи, але не обмежуючись:',
        items: ['Copart (США, Канада)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'Аукціони в Кореї, Японії, Китаї, Європі та інших країнах'],
        note: 'CarAuction надає інформаційні послуги та інтерфейс для зручної роботи з платформами автоаукціонів. Ми не є власниками, організаторами або операторами цих аукціонів і не контролюємо їхню діяльність.',
      },
      registration: {
        title: '3. Реєстрація та доступ до сервісу',
        intro: 'Для використання CarAuction необхідно:',
        items: ['Заповнити реєстраційну форму з коректними персональними даними', 'Отримати доступ до програмного забезпечення від наших менеджерів', 'Дотримуватися всіх положень цих Умов використання'],
        note: 'Ми залишаємо за собою право відмовити у наданні доступу або призупинити роботу облікового запису у разі порушення Умов використання, неправомірних дій або інших обставин, які загрожують безпеці сервісу або інших користувачів.',
      },
      disclaimer: {
        title: '4. Відмова від відповідальності (Disclaimer)',
        warning: '⚠️ ВАЖЛИВО: Відмова від відповідальності',
        warningText: 'CarAuction надає виключно інформаційні послуги та технічний інтерфейс для доступу до платформ автоаукціонів. Наш сервіс не несе відповідальності за наступне:',
        technical: {
          title: '4.1. Технічний стан автомобілів',
          intro: 'Ми не гарантуємо та не несемо відповідальності за технічний стан автомобілів, виставлених на аукціонах. Користувач самостійно несе повну відповідальність за оцінку технічного стану автомобіля перед участю в торгах. Рекомендуємо:',
          items: ['Ретельне вивчення опису лоту на платформі аукціону', 'Перевірку фотографій та документації', 'Консультації з фахівцями щодо технічного стану', 'Ознайомлення з умовами конкретного аукціону'],
        },
        defects: {
          title: '4.2. Приховані дефекти та невідповідність опису',
          content: 'CarAuction не несе відповідальності за приховані дефекти автомобілів, які не були вказані в описі лоту на платформі аукціону, або за невідповідність фотографій реальному стану транспортного засобу. Всі претензії щодо технічного стану або дефектів мають спрямовуватися безпосередньо до організаторів аукціону (Copart, IAAI тощо).',
        },
        actions: {
          title: '4.3. Дії організаторів аукціонів',
          intro: 'CarAuction не контролює та не несе відповідальності за дії, рішення або політику організаторів автоаукціонів (Copart, IAAI, Impact, Manheim та інших). Включаючи, але не обмежуючись:',
          items: ['Скасування або зміна умов торгів', 'Відмова в участі в аукціоні', 'Зміна стартових цін або правил', 'Технічні збої на платформах аукціонів', 'Відповідальність за доставку або документацію'],
        },
        financial: {
          title: '4.4. Фінансові операції та розрахунки',
          content: 'CarAuction надає технічну можливість для участі в торгах, але не несе відповідальності за фінансові операції між користувачем та організаторами аукціонів. Всі розрахунки, комісії, податки та інші фінансові зобов\'язання регулюються умовами конкретного аукціону та відповідальністю несе безпосередньо користувач.',
        },
        availability: {
          title: '4.5. Доступність сервісу',
          content: 'Ми прагнемо забезпечити безперервну роботу CarAuction, але не гарантуємо абсолютну доступність сервісу 24/7. Можливі технічні перерви для обслуговування, оновлення системи або внаслідок незалежних від нас обставин (збої інтернет-зв\'язку, DDoS-атаки тощо).',
        },
      },
      financial: {
        title: '5. Фінансові зобов\'язання користувача',
        intro: 'Користувач зобов\'язується:',
        items: [
          { label: 'Вчасно оплачувати виграні лоти', description: 'відповідно до умов конкретного аукціону та термінів, встановлених організаторами' },
          { label: 'Оплачувати комісію сервісу CarAuction', description: 'згідно з чинними тарифами, які були узгоджені при наданні доступу до платформи' },
          { label: 'Нести всі витрати', description: 'пов\'язані з доставкою автомобіля, митним оформленням, страхуванням та іншими додатковими послугами' },
          { label: 'Виконувати всі податкові зобов\'язання', description: 'відповідно до законодавства своєї країни' },
        ],
        note: 'У разі несвоєчасної оплати виграного лоту або комісії сервісу, CarAuction має право призупинити або заблокувати доступ користувача до платформи до моменту погашення заборгованості.',
      },
      rights: {
        title: '6. Права та обов\'язки сторін',
        company: {
          title: '6.1. Права CarAuction',
          items: ['Блокувати доступ користувача за порушення Умов використання', 'Вносити зміни до програмного забезпечення та функціоналу сервісу', 'Змінювати тарифи на послуги (з попереднім повідомленням користувачів)', 'Вимагати надання коректної та актуальної інформації при реєстрації', 'Моніторити використання сервісу для забезпечення безпеки та якості'],
        },
        user: {
          title: '6.2. Обов\'язки користувача',
          items: ['Використовувати сервіс відповідно до його призначення та в межах чинного законодавства', 'Не розповсюджувати віруси, шкідливий код або намагатися отримати несанкціонований доступ до системи', 'Не використовувати програмне забезпечення для незаконних цілей або діяльності', 'Не передавати доступ до облікового запису третім особам без дозволу компанії', 'Несвоєчасно інформувати про зміни в контактних даних', 'Дотримуватися правил торгів, встановлених організаторами аукціонів'],
        },
      },
      intellectual: {
        title: '7. Інтелектуальна власність',
        content: [
          'Всі права на програмне забезпечення CarAuction, включаючи дизайн, код, логотипи, торговельні марки, належать компанії CarAuction та захищені законодавством про інтелектуальну власність. Користувач отримує обмежену, невиключну, непередавану ліцензію на використання програмного забезпечення виключно для особистих або комерційних цілей у межах функціоналу сервісу.',
          'Забороняється копіювання, модифікація, розповсюдження, реверс-інжиніринг або інші дії, спрямовані на розкриття або використання вихідного коду програмного забезпечення без письмового дозволу компанії.',
        ],
      },
      liability: {
        title: '8. Обмеження відповідальності',
        intro: 'В максимальній мірі, дозволеній чинним законодавством, CarAuction не несе відповідальності за:',
        items: ['Прямі, непрямі, випадкові або наслідкові збитки, пов\'язані з використанням або неможливістю використання сервісу', 'Втрату прибутків, даних, репутації або інших нематеріальних цінностей', 'Дії третіх осіб, включаючи організаторів аукціонів', 'Технічні збої або перерви в роботі сервісу', 'Незаконні дії користувачів або третіх осіб'],
      },
      changes: {
        title: '9. Зміни до Умов використання',
        content: [
          'Ми залишаємо за собою право вносити зміни до цих Умов використання. Про значні зміни ми повідомимо вас через електронну пошту або повідомлення в програмному забезпеченні. Продовжуючи використовувати сервіс після внесення змін, ви підтверджуєте свою згоду з оновленими Умовами.',
          'Рекомендуємо періодично переглядати цю сторінку для ознайомлення з актуальною версією Умов використання.',
        ],
      },
      termination: {
        title: '10. Припинення дії доступу',
        intro: 'CarAuction має право призупинити або припинити надання доступу до сервісу в разі:',
        items: ['Порушення користувачем положень цих Умов використання', 'Неправомірних дій або спроб нанесення шкоди сервісу', 'Несвоєчасної оплати комісії або виграного лоту', 'Надання недостовірної інформації при реєстрації', 'Незаконної діяльності користувача'],
      },
      jurisdiction: {
        title: '11. Застосовне право та вирішення спорів',
        content: 'Ці Умови використання регулюються та тлумачаться відповідно до законодавства України. Усі спори, що виникають у зв\'язку з цими Умовами або використанням сервісу, мають вирішуватися шляхом переговорів, а у разі недосягнення згоди — відповідно до чинного законодавства України.',
      },
      contact: {
        title: '12. Контактна інформація',
        intro: 'З усіх питань, пов\'язаних із цими Умовами використання, ви можете звертатися до нас:',
        emailLabel: 'Email:',
        phoneLabel: 'Телефон:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
}

// Export Terms of Use translations with fallback for missing languages
export const termsOfUseTranslations: Record<LegalLanguage, TermsOfUseTranslations> = {
  ua: termsOfUseUA,
  en: {
    title: 'Terms of Use',
    lastUpdated: 'Last updated',
    backToHome: 'Back to home',
    sections: {
      general: {
        title: '1. General Provisions',
        content: [
          'These Terms of Use (hereinafter referred to as "Terms") govern the relationship between CarAuction (hereinafter referred to as "We", "Our Service", "Company") and users of our software and website (hereinafter referred to as "You", "User").',
          'By using the CarAuction software, you acknowledge that you have read, understood, and agree to comply with all provisions of these Terms. If you do not agree to these Terms, please do not use our service.',
        ],
      },
      definitions: {
        title: '2. Definitions',
        intro: 'CarAuction is software (browser/interface) that provides users with access to global auto auctions, including but not limited to:',
        items: ['Copart (USA, Canada)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'Auctions in Korea, Japan, China, Europe, and other countries'],
        note: 'CarAuction provides informational services and an interface for convenient work with auto auction platforms. We are not owners, organizers, or operators of these auctions and do not control their activities.',
      },
      registration: {
        title: '3. Registration and Access to the Service',
        intro: 'To use CarAuction, you must:',
        items: ['Fill out the registration form with correct personal data', 'Receive access to the software from our managers', 'Comply with all provisions of these Terms of Use'],
        note: 'We reserve the right to deny access or suspend account activity in case of violation of Terms of Use, unlawful actions, or other circumstances that threaten the security of the service or other users.',
      },
      disclaimer: {
        title: '4. Disclaimer',
        warning: '⚠️ IMPORTANT: Disclaimer',
        warningText: 'CarAuction provides exclusively informational services and a technical interface for access to auto auction platforms. Our service is not responsible for the following:',
        technical: {
          title: '4.1. Technical Condition of Vehicles',
          intro: 'We do not guarantee and are not responsible for the technical condition of vehicles listed at auctions. The user independently bears full responsibility for assessing the technical condition of the vehicle before participating in bidding. We recommend:',
          items: ['Careful study of the lot description on the auction platform', 'Checking photos and documentation', 'Consultations with specialists regarding technical condition', 'Familiarization with the terms of a specific auction'],
        },
        defects: {
          title: '4.2. Hidden Defects and Description Mismatch',
          content: 'CarAuction is not responsible for hidden defects of vehicles that were not specified in the lot description on the auction platform, or for mismatch between photos and the actual condition of the vehicle. All claims regarding technical condition or defects must be directed directly to the auction organizers (Copart, IAAI, etc.).',
        },
        actions: {
          title: '4.3. Actions of Auction Organizers',
          intro: 'CarAuction does not control and is not responsible for the actions, decisions, or policies of auto auction organizers (Copart, IAAI, Impact, Manheim, and others). Including but not limited to:',
          items: ['Cancellation or change of bidding terms', 'Refusal to participate in the auction', 'Change of starting prices or rules', 'Technical failures on auction platforms', 'Responsibility for delivery or documentation'],
        },
        financial: {
          title: '4.4. Financial Operations and Calculations',
          content: 'CarAuction provides technical capability for participation in bidding, but is not responsible for financial operations between the user and auction organizers. All calculations, commissions, taxes, and other financial obligations are governed by the terms of a specific auction and are the direct responsibility of the user.',
        },
        availability: {
          title: '4.5. Service Availability',
          content: 'We strive to ensure continuous operation of CarAuction, but do not guarantee absolute service availability 24/7. Technical interruptions for maintenance, system updates, or due to circumstances beyond our control (Internet connection failures, DDoS attacks, etc.) are possible.',
        },
      },
      financial: {
        title: '5. User Financial Obligations',
        intro: 'The user undertakes to:',
        items: [
          { label: 'Pay for won lots in a timely manner', description: 'in accordance with the terms of a specific auction and deadlines established by organizers' },
          { label: 'Pay CarAuction service commission', description: 'according to current rates that were agreed upon when granting access to the platform' },
          { label: 'Bear all costs', description: 'related to vehicle delivery, customs clearance, insurance, and other additional services' },
          { label: 'Fulfill all tax obligations', description: 'in accordance with the legislation of your country' },
        ],
        note: 'In case of untimely payment for a won lot or service commission, CarAuction has the right to suspend or block user access to the platform until the debt is repaid.',
      },
      rights: {
        title: '6. Rights and Obligations of the Parties',
        company: {
          title: '6.1. CarAuction Rights',
          items: ['Block user access for violation of Terms of Use', 'Make changes to software and service functionality', 'Change service rates (with prior notice to users)', 'Require provision of correct and current information during registration', 'Monitor service usage to ensure security and quality'],
        },
        user: {
          title: '6.2. User Obligations',
          items: ['Use the service in accordance with its purpose and within applicable legislation', 'Not distribute viruses, malicious code, or attempt to gain unauthorized access to the system', 'Not use the software for illegal purposes or activities', 'Not transfer account access to third parties without company permission', 'Timely inform about changes in contact data', 'Comply with trading rules established by auction organizers'],
        },
      },
      intellectual: {
        title: '7. Intellectual Property',
        content: [
          'All rights to the CarAuction software, including design, code, logos, trademarks, belong to CarAuction company and are protected by intellectual property legislation. The user receives a limited, non-exclusive, non-transferable license to use the software exclusively for personal or commercial purposes within the service functionality.',
          'Copying, modification, distribution, reverse engineering, or other actions aimed at disclosing or using the software source code without written permission from the company is prohibited.',
        ],
      },
      liability: {
        title: '8. Limitation of Liability',
        intro: 'To the maximum extent permitted by applicable law, CarAuction is not liable for:',
        items: ['Direct, indirect, incidental, or consequential damages related to the use or inability to use the service', 'Loss of profits, data, reputation, or other intangible values', 'Actions of third parties, including auction organizers', 'Technical failures or interruptions in service operation', 'Illegal actions of users or third parties'],
      },
      changes: {
        title: '9. Changes to Terms of Use',
        content: [
          'We reserve the right to make changes to these Terms of Use. We will notify you of significant changes via email or a message in the software. By continuing to use the service after changes are made, you confirm your agreement with the updated Terms.',
          'We recommend periodically reviewing this page to familiarize yourself with the current version of the Terms of Use.',
        ],
      },
      termination: {
        title: '10. Termination of Access',
        intro: 'CarAuction has the right to suspend or terminate access to the service in case of:',
        items: ['User violation of these Terms of Use provisions', 'Unlawful actions or attempts to harm the service', 'Untimely payment of commission or won lot', 'Provision of false information during registration', 'Illegal user activity'],
      },
      jurisdiction: {
        title: '11. Applicable Law and Dispute Resolution',
        content: 'These Terms of Use are governed by and interpreted in accordance with the legislation of Ukraine. All disputes arising in connection with these Terms or use of the service shall be resolved through negotiations, and in case of failure to reach agreement — in accordance with applicable Ukrainian legislation.',
      },
      contact: {
        title: '12. Contact Information',
        intro: 'For all questions related to these Terms of Use, you can contact us:',
        emailLabel: 'Email:',
        phoneLabel: 'Phone:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  pl: {
    title: 'Warunki użytkowania',
    lastUpdated: 'Ostatnia aktualizacja',
    backToHome: 'Powrót do strony głównej',
    sections: {
      general: {
        title: '1. Postanowienia ogólne',
        content: [
          'Niniejsze Warunki użytkowania (zwane dalej „Warunki") regulują relacje między CarAuction (zwane dalej „My", „Nasza usługa", „Firma") a użytkownikami naszego oprogramowania i strony internetowej (zwane dalej „Ty", „Użytkownik").',
          'Korzystając z oprogramowania CarAuction, potwierdzasz, że przeczytałeś, zrozumiałeś i zgadzasz się przestrzegać wszystkich postanowień tych Warunków. Jeśli nie zgadzasz się z tymi Warunkami, prosimy nie korzystać z naszej usługi.',
        ],
      },
      definitions: {
        title: '2. Definicje',
        intro: 'CarAuction to oprogramowanie (przeglądarka/interfejs), które zapewnia użytkownikom dostęp do światowych aukcji samochodowych, w tym, ale nie ograniczając się do:',
        items: ['Copart (USA, Kanada)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'Aukcje w Korei, Japonii, Chinach, Europie i innych krajach'],
        note: 'CarAuction świadczy usługi informacyjne i interfejs do wygodnej pracy z platformami aukcji samochodowych. Nie jesteśmy właścicielami, organizatorami ani operatorami tych aukcji i nie kontrolujemy ich działalności.',
      },
      registration: {
        title: '3. Rejestracja i dostęp do usługi',
        intro: 'Aby korzystać z CarAuction, należy:',
        items: ['Wypełnić formularz rejestracyjny z poprawnymi danymi osobowymi', 'Otrzymać dostęp do oprogramowania od naszych menedżerów', 'Przestrzegać wszystkich postanowień tych Warunków użytkowania'],
        note: 'Zastrzegamy sobie prawo do odmowy udzielenia dostępu lub zawieszenia działania konta w przypadku naruszenia Warunków użytkowania, nieprawidłowych działań lub innych okoliczności, które zagrażają bezpieczeństwu usługi lub innych użytkowników.',
      },
      disclaimer: {
        title: '4. Wyłączenie odpowiedzialności',
        warning: '⚠️ WAŻNE: Wyłączenie odpowiedzialności',
        warningText: 'CarAuction świadczy wyłącznie usługi informacyjne i techniczny interfejs do dostępu do platform aukcji samochodowych. Nasza usługa nie ponosi odpowiedzialności za następujące:',
        technical: {
          title: '4.1. Stan techniczny pojazdów',
          intro: 'Nie gwarantujemy i nie ponosimy odpowiedzialności za stan techniczny pojazdów wystawionych na aukcjach. Użytkownik samodzielnie ponosi pełną odpowiedzialność za ocenę stanu technicznego pojazdu przed udziałem w licytacji. Zalecamy:',
          items: ['Staranne przestudiowanie opisu lotu na platformie aukcji', 'Sprawdzenie fotografii i dokumentacji', 'Konsultacje ze specjalistami dotyczące stanu technicznego', 'Zapoznanie się z warunkami konkretnej aukcji'],
        },
        defects: {
          title: '4.2. Ukryte wady i niezgodność z opisem',
          content: 'CarAuction nie ponosi odpowiedzialności za ukryte wady pojazdów, które nie zostały wskazane w opisie lotu na platformie aukcji, ani za niezgodność fotografii z rzeczywistym stanem pojazdu. Wszelkie roszczenia dotyczące stanu technicznego lub wad muszą być kierowane bezpośrednio do organizatorów aukcji (Copart, IAAI itp.).',
        },
        actions: {
          title: '4.3. Działania organizatorów aukcji',
          intro: 'CarAuction nie kontroluje i nie ponosi odpowiedzialności za działania, decyzje lub politykę organizatorów aukcji samochodowych (Copart, IAAI, Impact, Manheim i innych). W tym, ale nie ograniczając się do:',
          items: ['Anulowanie lub zmiana warunków licytacji', 'Odmowa udziału w aukcji', 'Zmiana cen wywoławczych lub zasad', 'Awarie techniczne na platformach aukcji', 'Odpowiedzialność za dostawę lub dokumentację'],
        },
        financial: {
          title: '4.4. Operacje finansowe i kalkulacje',
          content: 'CarAuction zapewnia techniczną możliwość udziału w licytacji, ale nie ponosi odpowiedzialności za operacje finansowe między użytkownikiem a organizatorami aukcji. Wszystkie kalkulacje, prowizje, podatki i inne zobowiązania finansowe są regulowane warunkami konkretnej aukcji i odpowiedzialnością ponosi bezpośrednio użytkownik.',
        },
        availability: {
          title: '4.5. Dostępność usługi',
          content: 'Dążymy do zapewnienia ciągłej pracy CarAuction, ale nie gwarantujemy absolutnej dostępności usługi 24/7. Możliwe są przerwy techniczne w celu konserwacji, aktualizacji systemu lub w wyniku okoliczności niezależnych od nas (awarie połączenia internetowego, ataki DDoS itp.).',
        },
      },
      financial: {
        title: '5. Zobowiązania finansowe użytkownika',
        intro: 'Użytkownik zobowiązuje się do:',
        items: [
          { label: 'Terminowego opłacania wygranych lotów', description: 'zgodnie z warunkami konkretnej aukcji i terminami ustalonymi przez organizatorów' },
          { label: 'Opłacania prowizji usługi CarAuction', description: 'zgodnie z obowiązującymi taryfami, które zostały uzgodnione przy udzieleniu dostępu do platformy' },
          { label: 'Ponoszenia wszystkich kosztów', description: 'związanych z dostawą pojazdu, odprawą celną, ubezpieczeniem i innymi dodatkowymi usługami' },
          { label: 'Wykonywania wszystkich zobowiązań podatkowych', description: 'zgodnie z prawodawstwem swojego kraju' },
        ],
        note: 'W przypadku nieterminowej zapłaty za wygrany lot lub prowizję usługi, CarAuction ma prawo zawiesić lub zablokować dostęp użytkownika do platformy do momentu spłaty zadłużenia.',
      },
      rights: {
        title: '6. Prawa i obowiązki stron',
        company: {
          title: '6.1. Prawa CarAuction',
          items: ['Blokowanie dostępu użytkownika za naruszenie Warunków użytkowania', 'Wprowadzanie zmian w oprogramowaniu i funkcjonalności usługi', 'Zmiana taryf usług (z wcześniejszym powiadomieniem użytkowników)', 'Wymaganie podania poprawnej i aktualnej informacji podczas rejestracji', 'Monitorowanie korzystania z usługi w celu zapewnienia bezpieczeństwa i jakości'],
        },
        user: {
          title: '6.2. Obowiązki użytkownika',
          items: ['Korzystanie z usługi zgodnie z jej przeznaczeniem i w granicach obowiązującego prawodawstwa', 'Nierozpowszechnianie wirusów, złośliwego kodu ani próby uzyskania nieautoryzowanego dostępu do systemu', 'Niekorzystanie z oprogramowania w celach nielegalnych lub działalności', 'Nieprzekazywanie dostępu do konta osobom trzecim bez zgody firmy', 'Terminowe informowanie o zmianach w danych kontaktowych', 'Przestrzeganie zasad handlu ustalonych przez organizatorów aukcji'],
        },
      },
      intellectual: {
        title: '7. Własność intelektualna',
        content: [
          'Wszystkie prawa do oprogramowania CarAuction, w tym projekt, kod, loga, znaki towarowe, należą do firmy CarAuction i są chronione prawodawstwem o własności intelektualnej. Użytkownik otrzymuje ograniczoną, niewyłączną, nieprzenoszalną licencję na korzystanie z oprogramowania wyłącznie do celów osobistych lub komercyjnych w granicach funkcjonalności usługi.',
          'Zabronione jest kopiowanie, modyfikacja, rozpowszechnianie, inżynieria wsteczna lub inne działania mające na celu ujawnienie lub wykorzystanie kodu źródłowego oprogramowania bez pisemnej zgody firmy.',
        ],
      },
      liability: {
        title: '8. Ograniczenie odpowiedzialności',
        intro: 'W maksymalnym zakresie, dozwolonym przez obowiązujące prawo, CarAuction nie ponosi odpowiedzialności za:',
        items: ['Bezpośrednie, pośrednie, przypadkowe lub wynikowe szkody związane z korzystaniem lub niemożnością korzystania z usługi', 'Utratę zysków, danych, reputacji lub innych wartości niematerialnych', 'Działania osób trzecich, w tym organizatorów aukcji', 'Awarie techniczne lub przerwy w działaniu usługi', 'Nielegalne działania użytkowników lub osób trzecich'],
      },
      changes: {
        title: '9. Zmiany w Warunkach użytkowania',
        content: [
          'Zastrzegamy sobie prawo do wprowadzania zmian w niniejszych Warunkach użytkowania. O znaczących zmianach poinformujemy Cię za pomocą e-maila lub wiadomości w oprogramowaniu. Kontynuując korzystanie z usługi po wprowadzeniu zmian, potwierdzasz zgodę na zaktualizowane Warunki.',
          'Zalecamy okresowe przeglądanie tej strony w celu zapoznania się z aktualną wersją Warunków użytkowania.',
        ],
      },
      termination: {
        title: '10. Zakończenie dostępu',
        intro: 'CarAuction ma prawo zawiesić lub zakończyć udzielanie dostępu do usługi w przypadku:',
        items: ['Naruszenia przez użytkownika postanowień niniejszych Warunków użytkowania', 'Nieprawidłowych działań lub prób wyrządzenia szkody usłudze', 'Nieterminowej zapłaty prowizji lub wygranego lotu', 'Podania fałszywych informacji podczas rejestracji', 'Nielegalnej działalności użytkownika'],
      },
      jurisdiction: {
        title: '11. Obowiązujące prawo i rozstrzyganie sporów',
        content: 'Niniejsze Warunki użytkowania są regulowane i interpretowane zgodnie z prawodawstwem Ukrainy. Wszystkie spory wynikające w związku z tymi Warunkami lub korzystaniem z usługi powinny być rozstrzygane poprzez negocjacje, a w przypadku braku porozumienia — zgodnie z obowiązującym prawodawstwem ukraińskim.',
      },
      contact: {
        title: '12. Informacje kontaktowe',
        intro: 'We wszystkich sprawach związanych z niniejszymi Warunkami użytkowania, możesz skontaktować się z nami:',
        emailLabel: 'E-mail:',
        phoneLabel: 'Telefon:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  lt: {
    title: 'Naudojimo sąlygos',
    lastUpdated: 'Paskutinis atnaujinimas',
    backToHome: 'Atgal į pagrindinį',
    sections: {
      general: {
        title: '1. Bendrosios nuostatos',
        content: [
          'Šios Naudojimo sąlygos (toliau – „Sąlygos") reguliuoja santykius tarp CarAuction (toliau – „Mes", „Mūsų paslauga", „Įmonė") ir mūsų programinės įrangos bei svetainės vartotojų (toliau – „Jūs", „Vartotojas").',
          'Naudodamiesi CarAuction programine įranga, patvirtinate, kad perskaitėte, supratote ir sutinkate laikytis visų šių Sąlygų nuostatų. Jei nesutinkate su šiomis Sąlygomis, prašome nenaudoti mūsų paslaugos.',
        ],
      },
      definitions: {
        title: '2. Apibrėžimai',
        intro: 'CarAuction yra programinė įranga (naršyklė/sąsaja), kuri suteikia vartotojams prieigą prie pasaulinių automobilių aukcionų, įskaitant, bet neapsiribojant:',
        items: ['Copart (JAV, Kanada)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'Aukcionai Korėjoje, Japonijoje, Kinijoje, Europoje ir kitose šalyse'],
        note: 'CarAuction teikia informacines paslaugas ir sąsają patogiam darbui su automobilių aukcionų platformomis. Mes nesame šių aukcionų savininkai, organizatoriai ar operatoriai ir nekontroliuojame jų veiklos.',
      },
      registration: {
        title: '3. Registracija ir prieiga prie paslaugos',
        intro: 'Norint naudotis CarAuction, būtina:',
        items: ['Užpildyti registracijos formą teisingais asmens duomenimis', 'Gauti prieigą prie programinės įrangos iš mūsų vadovų', 'Laikytis visų šių Naudojimo sąlygų nuostatų'],
        note: 'Mes pasiliekame teisę atmesti prieigos suteikimą arba sustabdyti paskyros veiklą esant Naudojimo sąlygų pažeidimui, neteisėtam veiksmui ar kitoms aplinkybėms, kurios gresia paslaugos ar kitų vartotojų saugumui.',
      },
      disclaimer: {
        title: '4. Atsakomybės atsisakymas',
        warning: '⚠️ SVARBU: Atsakomybės atsisakymas',
        warningText: 'CarAuction teikia tik informacines paslaugas ir techninę sąsają prieigai prie automobilių aukcionų platformų. Mūsų paslauga neatsako už:',
        technical: {
          title: '4.1. Automobilių techninė būklė',
          intro: 'Mes negarantuojame ir neatsakome už automobilių, išdėstytų aukcionuose, techninę būklę. Vartotojas savarankiškai neša visą atsakomybę už automobilio techninės būklės įvertinimą prieš dalyvaujant prekyboje. Rekomenduojame:',
          items: ['Kruopščiai išstudijuoti partijos aprašymą aukciono platformoje', 'Patikrinti nuotraukas ir dokumentaciją', 'Konsultacijas su specialistais dėl techninės būklės', 'Susipažinti su konkretaus aukciono sąlygomis'],
        },
        defects: {
          title: '4.2. Paslėpti defektai ir aprašymo neatitikimas',
          content: 'CarAuction neatsako už automobilių paslėptus defektus, kurie nebuvo nurodyti partijos aprašyme aukciono platformoje, arba už nuotraukų neatitikimą realiam transporto priemonės būklei. Visi reikalavimai dėl techninės būklės ar defektų turi būti nukreipti tiesiogiai į aukciono organizatorius (Copart, IAAI ir kt.).',
        },
        actions: {
          title: '4.3. Aukcionų organizatorių veiksmai',
          intro: 'CarAuction nekontroliuoja ir neatsako už automobilių aukcionų organizatorių (Copart, IAAI, Impact, Manheim ir kitų) veiksmus, sprendimus ar politiką. Įskaitant, bet neapsiribojant:',
          items: ['Prekybos sąlygų atšaukimas arba pakeitimas', 'Atsisakymas dalyvauti aukcione', 'Pradinių kainų arba taisyklių keitimas', 'Techniniai gedimai aukcionų platformose', 'Atsakomybė už pristatymą arba dokumentaciją'],
        },
        financial: {
          title: '4.4. Finansinės operacijos ir skaičiavimai',
          content: 'CarAuction suteikia techninę galimybę dalyvauti prekyboje, tačiau neatsako už finansines operacijas tarp vartotojo ir aukcionų organizatorių. Visi skaičiavimai, komisiniai, mokesčiai ir kiti finansiniai įsipareigojimai reguliuojami konkretaus aukciono sąlygomis ir atsakomybę neša tiesiogiai vartotojas.',
        },
        availability: {
          title: '4.5. Paslaugos prieinamumas',
          content: 'Mes siekiame užtikrinti nenutrūkstamą CarAuction veiklą, tačiau negarantuojame absoliutaus paslaugos prieinamumo 24/7. Galimi techniniai pertraukos aptarnavimui, sistemos atnaujinimui arba dėl nuo mūsų nepriklausančių aplinkybių (interneto ryšio gedimai, DDoS atakos ir kt.).',
        },
      },
      financial: {
        title: '5. Vartotojo finansiniai įsipareigojimai',
        intro: 'Vartotojas įsipareigoja:',
        items: [
          { label: 'Laiku apmokėti laimėtas partijas', description: 'pagal konkretaus aukciono sąlygas ir organizatorių nustatytus terminus' },
          { label: 'Apmokėti CarAuction paslaugos komisinį', description: 'pagal galiojančias tarifus, kurie buvo susitarta suteikiant prieigą prie platformos' },
          { label: 'Nešti visas išlaidas', description: 'susijusias su automobilio pristatymu, muitinės registracija, draudimu ir kitomis papildomomis paslaugomis' },
          { label: 'Vykdyti visus mokesčių įsipareigojimus', description: 'pagal savo šalies teisės aktus' },
        ],
        note: 'Esant ne laiku apmokėtai laimėtai partijai arba paslaugos komisiniui, CarAuction turi teisę sustabdyti arba užblokuoti vartotojo prieigą prie platformos iki skolos grąžinimo momento.',
      },
      rights: {
        title: '6. Šalių teisės ir įsipareigojimai',
        company: {
          title: '6.1. CarAuction teisės',
          items: ['Užblokuoti vartotojo prieigą už Naudojimo sąlygų pažeidimą', 'Įvesti pakeitimus į programinę įrangą ir paslaugos funkcionalumą', 'Keisti paslaugų tarifus (iš anksto pranešant vartotojams)', 'Reikalauti teisingos ir aktualios informacijos teikimo registracijos metu', 'Stebėti paslaugos naudojimą siekiant užtikrinti saugumą ir kokybę'],
        },
        user: {
          title: '6.2. Vartotojo įsipareigojimai',
          items: ['Naudoti paslaugą pagal jos paskirtį ir galiojančių teisės aktų ribose', 'Nepaskleisti virusų, kenkėjiško kodo arba nesiekti gauti neleistinos prieigos prie sistemos', 'Nenaudoti programinės įrangos nelegaliais tikslais arba veikla', 'Neperduoti paskyros prieigos trečioms šalims be įmonės leidimo', 'Laiku informuoti apie kontaktinių duomenų pakeitimus', 'Laikytis prekybos taisyklių, nustatytų aukcionų organizatorių'],
        },
      },
      intellectual: {
        title: '7. Intelektinė nuosavybė',
        content: [
          'Visos teisės į CarAuction programinę įrangą, įskaitant dizainą, kodą, logotipus, prekių ženklus, priklauso CarAuction įmonei ir yra saugomos intelektinės nuosavybės teisės aktais. Vartotojas gauna ribotą, ne išskirtinę, neperduodamą licenciją naudoti programinę įrangą tik asmeniniams arba komerciniams tikslams paslaugos funkcionalumo ribose.',
          'Draudžiama kopijuoti, modifikuoti, platinti, atvirkštinę inžineriją ar kitus veiksmus, skirtus atskleisti arba naudoti programinės įrangos išeities kodą be raštiško įmonės leidimo.',
        ],
      },
      liability: {
        title: '8. Atsakomybės apribojimas',
        intro: 'Maksimaliai leistinu mastu, leistinu galiojančiais teisės aktais, CarAuction neatsako už:',
        items: ['Tiesioginius, netiesioginius, atsitiktinius arba pasekmės nuostolius, susijusius su paslaugos naudojimu arba neįmanomumu naudoti paslaugą', 'Pelno, duomenų, reputacijos ar kitų nematerialinių vertybių praradimą', 'Trečių šalių veiksmus, įskaitant aukcionų organizatorius', 'Techninius gedimus arba pertraukas paslaugos veikime', 'Neteisėtus vartotojų arba trečių šalių veiksmus'],
      },
      changes: {
        title: '9. Naudojimo sąlygų pakeitimai',
        content: [
          'Mes pasiliekame teisę įvesti pakeitimus į šias Naudojimo sąlygas. Apie reikšmingus pakeitimus pranešime jums el. paštu arba pranešimu programinėje įrangoje. Tęsdami naudotis paslauga po pakeitimų įvedimo, patvirtinate savo sutikimą su atnaujintomis Sąlygomis.',
          'Rekomenduojame periodiškai peržiūrėti šį puslapį, kad susipažintumėte su dabartine Naudojimo sąlygų versija.',
        ],
      },
      termination: {
        title: '10. Prieigos nutraukimas',
        intro: 'CarAuction turi teisę sustabdyti arba nutraukti prieigos suteikimą prie paslaugos esant:',
        items: ['Vartotojo pažeidimui šių Naudojimo sąlygų nuostatų', 'Neteisėtiems veiksmams arba bandymams pakenkti paslaugai', 'Ne laiku apmokėtam komisiniam arba laimėtai partijai', 'Netiksliai informacijos teikimui registracijos metu', 'Neteisėtai vartotojo veiklai'],
      },
      jurisdiction: {
        title: '11. Taikomas teisės aktas ir ginčų sprendimas',
        content: 'Šios Naudojimo sąlygos yra reguliuojamos ir aiškinamos pagal Ukrainos teisės aktus. Visi ginčai, kylančys dėl šių Sąlygų arba paslaugos naudojimo, turi būti sprendžiami per derybas, o nepavykus pasiekti susitarimo — pagal galiojančius Ukrainos teisės aktus.',
      },
      contact: {
        title: '12. Kontaktinė informacija',
        intro: 'Dėl visų klausimų, susijusių su šiomis Naudojimo sąlygomis, galite susisiekti su mumis:',
        emailLabel: 'El. paštas:',
        phoneLabel: 'Telefonas:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  ge: {
    title: 'გამოყენების პირობები',
    lastUpdated: 'ბოლო განახლება',
    backToHome: 'მთავარზე დაბრუნება',
    sections: {
      general: {
        title: '1. ზოგადი დებულებები',
        content: [
          'ეს გამოყენების პირობები (შემდგომში – „პირობები") არეგულირებს ურთიერთობას CarAuction-სა (შემდგომში – „ჩვენ", „ჩვენი სერვისი", „კომპანია") და ჩვენი პროგრამული უზრუნველყოფისა და ვებ-საიტის მომხმარებლებს შორის (შემდგომში – „თქვენ", „მომხმარებელი").',
          'CarAuction პროგრამული უზრუნველყოფის გამოყენებით, თქვენ ადასტურებთ, რომ წაიკითხეთ, გაიგეთ და ეთანხმებით ამ პირობების ყველა დებულების დაცვას. თუ არ ეთანხმებით ამ პირობებს, გთხოვთ, არ გამოიყენოთ ჩვენი სერვისი.',
        ],
      },
      definitions: {
        title: '2. განმარტებები',
        intro: 'CarAuction არის პროგრამული უზრუნველყოფა (ბრაუზერი/ინტერფეისი), რომელიც უზრუნველყოფს მომხმარებლებს წვდომას მსოფლიო ავტოაუქციონებზე, მათ შორის, მაგრამ არ შემოიფარგლება:',
        items: ['Copart (აშშ, კანადა)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'აუქციონები კორეაში, იაპონიაში, ჩინეთში, ევროპაში და სხვა ქვეყნებში'],
        note: 'CarAuction უზრუნველყოფს საინფორმაციო მომსახურებას და ინტერფეისს ავტოაუქციონების პლატფორმებთან მოსახერხებელი მუშაობისთვის. ჩვენ არ ვართ ამ აუქციონების მფლობელები, ორგანიზატორები ან ოპერატორები და არ ვაკონტროლებთ მათ საქმიანობას.',
      },
      registration: {
        title: '3. რეგისტრაცია და სერვისზე წვდომა',
        intro: 'CarAuction-ის გამოსაყენებლად საჭიროა:',
        items: ['რეგისტრაციის ფორმის შევსება სწორი პირადი მონაცემებით', 'პროგრამულ უზრუნველყოფაზე წვდომის მიღება ჩვენი მენეჯერებისგან', 'ამ გამოყენების პირობების ყველა დებულების დაცვა'],
        note: 'ჩვენ ვიტოვებთ უფლებას უარვყოთ წვდომის მიწოდება ან შევაჩეროთ ანგარიშის მუშაობა გამოყენების პირობების დარღვევის, უკანონო ქმედებების ან სხვა გარემოებების შემთხვევაში, რომლებიც ემუქრება სერვისის ან სხვა მომხმარებლების უსაფრთხოებას.',
      },
      disclaimer: {
        title: '4. პასუხისმგებლობის განთავისუფლება',
        warning: '⚠️ მნიშვნელოვანია: პასუხისმგებლობის განთავისუფლება',
        warningText: 'CarAuction უზრუნველყოფს მხოლოდ საინფორმაციო მომსახურებას და ტექნიკურ ინტერფეისს ავტოაუქციონების პლატფორმებზე წვდომისთვის. ჩვენი სერვისი არ არის პასუხისმგებელი შემდეგზე:',
        technical: {
          title: '4.1. ავტომობილების ტექნიკური მდგომარეობა',
          intro: 'ჩვენ არ გარანტირებთ და არ ვართ პასუხისმგებლები აუქციონებზე გამოფენილი ავტომობილების ტექნიკურ მდგომარეობაზე. მომხმარებელი დამოუკიდებლად ატარებს სრულ პასუხისმგებლობას ავტომობილის ტექნიკური მდგომარეობის შეფასებაზე ვაჭრობაში მონაწილეობამდე. გირჩევთ:',
          items: ['ლოტის აღწერის ფრთხილად შესწავლა აუქციონის პლატფორმაზე', 'ფოტოებისა და დოკუმენტაციის შემოწმება', 'კონსულტაცია სპეციალისტებთან ტექნიკური მდგომარეობის შესახებ', 'კონკრეტული აუქციონის პირობებთან გაცნობა'],
        },
        defects: {
          title: '4.2. ფარული დეფექტები და აღწერის შეუსაბამობა',
          content: 'CarAuction არ არის პასუხისმგებელი ავტომობილების ფარულ დეფექტებზე, რომლებიც არ იყო მითითებული ლოტის აღწერაში აუქციონის პლატფორმაზე, ან ფოტოების შეუსაბამობაზე ტრანსპორტის საშუალების რეალურ მდგომარეობასთან. ყველა პრეტენზია ტექნიკურ მდგომარეობაზე ან დეფექტებზე უნდა იყოს მიმართული უშუალოდ აუქციონის ორგანიზატორებზე (Copart, IAAI და სხვები).',
        },
        actions: {
          title: '4.3. აუქციონების ორგანიზატორების ქმედებები',
          intro: 'CarAuction არ აკონტროლებს და არ არის პასუხისმგებელი ავტოაუქციონების ორგანიზატორების (Copart, IAAI, Impact, Manheim და სხვების) ქმედებებზე, გადაწყვეტილებებზე ან პოლიტიკაზე. მათ შორის, მაგრამ არ შემოიფარგლება:',
          items: ['ვაჭრობის პირობების გაუქმება ან ცვლილება', 'მონაწილეობის უარი აუქციონში', 'საწყისი ფასების ან წესების ცვლილება', 'ტექნიკური გაუმართაობა აუქციონების პლატფორმებზე', 'პასუხისმგებლობა მიწოდებაზე ან დოკუმენტაციაზე'],
        },
        financial: {
          title: '4.4. ფინანსური ოპერაციები და გათვლები',
          content: 'CarAuction უზრუნველყოფს ტექნიკურ შესაძლებლობას ვაჭრობაში მონაწილეობისთვის, მაგრამ არ არის პასუხისმგებელი ფინანსურ ოპერაციებზე მომხმარებელსა და აუქციონების ორგანიზატორებს შორის. ყველა გათვლა, საკომისიო, გადასახადები და სხვა ფინანსური ვალდებულებები რეგულირდება კონკრეტული აუქციონის პირობებით და პასუხისმგებლობა ეკისრება უშუალოდ მომხმარებელს.',
        },
        availability: {
          title: '4.5. სერვისის ხელმისაწვდომობა',
          content: 'ჩვენ ვცდილობთ უზრუნველვყოთ CarAuction-ის უწყვეტი მუშაობა, მაგრამ არ გარანტირებთ სერვისის აბსოლუტურ ხელმისაწვდომობას 24/7. შესაძლებელია ტექნიკური შეწყვეტა მომსახურების, სისტემის განახლების ან ჩვენგან დამოუკიდებელი გარემოებების გამო (ინტერნეტ-კავშირის გაუმართაობა, DDoS თავდასხმები და სხვა).',
        },
      },
      financial: {
        title: '5. მომხმარებლის ფინანსური ვალდებულებები',
        intro: 'მომხმარებელი იღებს ვალდებულებას:',
        items: [
          { label: 'დროულად გადაიხადოს მოგებული ლოტები', description: 'კონკრეტული აუქციონის პირობებისა და ორგანიზატორების მიერ დადგენილი ვადების შესაბამისად' },
          { label: 'გადაიხადოს CarAuction სერვისის საკომისიო', description: 'მოქმედი ტარიფების შესაბამისად, რომლებიც შეთანხმდა პლატფორმაზე წვდომის მიწოდებისას' },
          { label: 'გაიტანოს ყველა ხარჯი', description: 'დაკავშირებული ავტომობილის მიწოდებასთან, საბაჟო რეგისტრაციასთან, დაზღვევასთან და სხვა დამატებით მომსახურებასთან' },
          { label: 'შეასრულოს ყველა საგადასახადო ვალდებულება', description: 'თქვენი ქვეყნის კანონმდებლობის შესაბამისად' },
        ],
        note: 'მოგებული ლოტის ან სერვისის საკომისიოს დროულად გადაუხდელობის შემთხვევაში, CarAuction-ს აქვს უფლება შეაჩეროს ან დაბლოკოს მომხმარებლის წვდომა პლატფორმაზე ვალის დაფარვის მომენტამდე.',
      },
      rights: {
        title: '6. მხარეთა უფლებები და ვალდებულებები',
        company: {
          title: '6.1. CarAuction-ის უფლებები',
          items: ['დაბლოკოს მომხმარებლის წვდომა გამოყენების პირობების დარღვევისთვის', 'შეიტანოს ცვლილებები პროგრამულ უზრუნველყოფასა და სერვისის ფუნქციონალში', 'შეცვალოს სერვისების ტარიფები (მომხმარებლების წინასწარი შეტყობინებით)', 'მოითხოვოს სწორი და აქტუალური ინფორმაციის მიწოდება რეგისტრაციის დროს', 'ააკონტროლოს სერვისის გამოყენება უსაფრთხოებისა და ხარისხის უზრუნველსაყოფად'],
        },
        user: {
          title: '6.2. მომხმარებლის ვალდებულებები',
          items: ['გამოიყენოს სერვისი მისი დანიშნულებისა და მოქმედი კანონმდებლობის ფარგლებში', 'არ გაავრცელოს ვირუსები, მავნე კოდი ან არ შეეცადოს მიიღოს უნებართვო წვდომა სისტემაზე', 'არ გამოიყენოს პროგრამული უზრუნველყოფა უკანონო მიზნებისთვის ან საქმიანობისთვის', 'არ გადააწოდოს ანგარიშზე წვდომა მესამე მხარეებს კომპანიის ნებართვის გარეშე', 'დროულად აცნობოს კონტაქტური მონაცემების ცვლილებების შესახებ', 'დაიცვას ვაჭრობის წესები, დადგენილი აუქციონების ორგანიზატორების მიერ'],
        },
      },
      intellectual: {
        title: '7. ინტელექტუალური საკუთრება',
        content: [
          'CarAuction პროგრამული უზრუნველყოფის ყველა უფლება, მათ შორის დიზაინი, კოდი, ლოგოები, სავトレის ნიშნები, ეკუთვნის CarAuction კომპანიას და დაცულია ინტელექტუალური საკუთრების კანონმდებლობით. მომხმარებელი იღებს შეზღუდულ, არა ექსკლუზიურ, არ გადაცემად ლიცენზიას პროგრამული უზრუნველყოფის გამოსაყენებლად მხოლოდ პირადი ან კომერციული მიზნებისთვის სერვისის ფუნქციონალის ფარგლებში.',
          'აკრძალულია კოპირება, მოდიფიკაცია, გავრცელება, საპირისპირო ინჟინერია ან სხვა ქმედებები, რომლებიც მიზნად ისახავს პროგრამული უზრუნველყოფის საწყისი კოდის გამჟღავნებას ან გამოყენებას კომპანიის წერილობითი ნებართვის გარეშე.',
        ],
      },
      liability: {
        title: '8. პასუხისმგებლობის შეზღუდვა',
        intro: 'მაქსიმალურ ზღვარზე, დაშვებულზე მოქმედი კანონმდებლობით, CarAuction არ არის პასუხისმგებელი:',
        items: ['პირდაპირ, არაპირდაპირ, შემთხვევით ან შედეგად მიყენებული ზიანისთვის, დაკავშირებული სერვისის გამოყენებასთან ან სერვისის გამოუყენებლობასთან', 'მოგების, მონაცემების, რეპუტაციის ან სხვა არამატერიალური ღირებულებების დაკარგვისთვის', 'მესამე მხარეთა ქმედებებისთვის, მათ შორის აუქციონების ორგანიზატორებისთვის', 'ტექნიკური გაუმართაობის ან სერვისის მუშაობის შეწყვეტისთვის', 'მომხმარებლების ან მესამე მხარეთა უკანონო ქმედებებისთვის'],
      },
      changes: {
        title: '9. გამოყენების პირობების ცვლილებები',
        content: [
          'ჩვენ ვიტოვებთ უფლებას შევიტანოთ ცვლილებები ამ გამოყენების პირობებში. მნიშვნელოვან ცვლილებებზე გაგაცნობთ ელ. ფოსტით ან შეტყობინებით პროგრამულ უზრუნველყოფაში. სერვისის გამოყენების გაგრძელებით ცვლილებების შეტანის შემდეგ, თქვენ ადასტურებთ თქვენი თანხმობას განახლებულ პირობებზე.',
          'გირჩევთ პერიოდულად გადაამოწმოთ ეს გვერდი, რათა გაეცნოთ გამოყენების პირობების არსებულ ვერსიას.',
        ],
      },
      termination: {
        title: '10. წვდომის შეწყვეტა',
        intro: 'CarAuction-ს აქვს უფლება შეაჩეროს ან შეწყვიტოს წვდომის მიწოდება სერვისზე შემდეგ შემთხვევებში:',
        items: ['მომხმარებლის მიერ ამ გამოყენების პირობების დებულებების დარღვევა', 'უკანონო ქმედებები ან სერვისისთვის ზიანის მიყენების მცდელობა', 'საკომისიოს ან მოგებული ლოტის დროულად გადაუხდელობა', 'ცრუ ინფორმაციის მიწოდება რეგისტრაციის დროს', 'მომხმარებლის უკანონო საქმიანობა'],
      },
      jurisdiction: {
        title: '11. გამოყენებადი სამართალი და დავების გადაწყვეტა',
        content: 'ეს გამოყენების პირობები რეგულირდება და იმარჯვება უკრაინის კანონმდებლობის შესაბამისად. ყველა დავა, რომელიც წარმოიქმნება ამ პირობებთან ან სერვისის გამოყენებასთან დაკავშირებით, უნდა გადაწყდეს მოლაპარაკებებით, ხოლო შეთანხმების მიუღწევლობის შემთხვევაში — უკრაინის მოქმედი კანონმდებლობის შესაბამისად.',
      },
      contact: {
        title: '12. საკონტაქტო ინფორმაცია',
        intro: 'ყველა კითხვაზე, რომელიც დაკავშირებულია ამ გამოყენების პირობებთან, შეგიძლიათ დაგვიკავშირდეთ:',
        emailLabel: 'ელ. ფოსტა:',
        phoneLabel: 'ტელეფონი:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
  ar: {
    title: 'شروط الاستخدام',
    lastUpdated: 'آخر تحديث',
    backToHome: 'العودة إلى الصفحة الرئيسية',
    sections: {
      general: {
        title: '1. الأحكام العامة',
        content: [
          'تحدد شروط الاستخدام هذه (يشار إليها فيما يلي باسم "الشروط") العلاقة بين CarAuction (يشار إليها فيما يلي باسم "نحن"، "خدمتنا"، "الشركة") ومستخدمي برنامجنا وموقعنا الإلكتروني (يشار إليهم فيما يلي باسم "أنت"، "المستخدم").',
          'باستخدام برنامج CarAuction، فإنك تؤكد أنك قد قرأت وفهمت وتوافق على الامتثال لجميع أحكام هذه الشروط. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام خدمتنا.',
        ],
      },
      definitions: {
        title: '2. التعريفات',
        intro: 'CarAuction هو برنامج (متصفح/واجهة) يوفر للمستخدمين الوصول إلى مزادات السيارات العالمية، بما في ذلك على سبيل المثال لا الحصر:',
        items: ['Copart (الولايات المتحدة، كندا)', 'IAAI (Insurance Auto Auctions Inc.)', 'Impact Auto Auctions', 'Manheim', 'المزادات في كوريا، اليابان، الصين، أوروبا ودول أخرى'],
        note: 'توفر CarAuction خدمات إعلامية وواجهة للعمل المريح مع منصات مزادات السيارات. نحن لسنا مالكين أو منظمين أو مشغلين لهذه المزادات ولا نتحكم في أنشطتها.',
      },
      registration: {
        title: '3. التسجيل والوصول إلى الخدمة',
        intro: 'لاستخدام CarAuction، يجب:',
        items: ['ملء نموذج التسجيل ببيانات شخصية صحيحة', 'الحصول على الوصول إلى البرنامج من مديرينا', 'الامتثال لجميع أحكام شروط الاستخدام هذه'],
        note: 'نحتفظ بالحق في رفض منح الوصول أو تعليق عمل الحساب في حالة انتهاك شروط الاستخدام أو الإجراءات غير المشروعة أو ظروف أخرى تهدد أمن الخدمة أو المستخدمين الآخرين.',
      },
      disclaimer: {
        title: '4. إعفاء من المسؤولية',
        warning: '⚠️ مهم: إعفاء من المسؤولية',
        warningText: 'توفر CarAuction حصرياً خدمات إعلامية وواجهة تقنية للوصول إلى منصات مزادات السيارات. خدمتنا ليست مسؤولة عن:',
        technical: {
          title: '4.1. الحالة التقنية للمركبات',
          intro: 'نحن لا نضمن ولسنا مسؤولين عن الحالة التقنية للمركبات المعروضة في المزادات. يتحمل المستخدم بشكل مستقل المسؤولية الكاملة عن تقييم الحالة التقنية للمركبة قبل المشاركة في المزايدة. نوصي بـ:',
          items: ['دراسة وصف اللوت بعناية على منصة المزاد', 'التحقق من الصور والوثائق', 'الاستشارات مع المتخصصين بخصوص الحالة التقنية', 'التعرف على شروط المزاد المحدد'],
        },
        defects: {
          title: '4.2. العيوب المخفية وعدم مطابقة الوصف',
          content: 'CarAuction ليست مسؤولة عن العيوب المخفية للمركبات التي لم يتم الإشارة إليها في وصف اللوت على منصة المزاد، أو عن عدم مطابقة الصور للحالة الفعلية للمركبة. يجب توجيه جميع المطالبات المتعلقة بالحالة التقنية أو العيوب مباشرة إلى منظمي المزاد (Copart، IAAI، إلخ).',
        },
        actions: {
          title: '4.3. إجراءات منظمي المزادات',
          intro: 'لا تتحكم CarAuction وليست مسؤولة عن إجراءات أو قرارات أو سياسات منظمي مزادات السيارات (Copart، IAAI، Impact، Manheim وآخرين). بما في ذلك على سبيل المثال لا الحصر:',
          items: ['إلغاء أو تغيير شروط المزايدة', 'رفض المشاركة في المزاد', 'تغيير الأسعار الأولية أو القواعد', 'الأعطال التقنية على منصات المزادات', 'المسؤولية عن التسليم أو الوثائق'],
        },
        financial: {
          title: '4.4. العمليات المالية والحسابات',
          content: 'توفر CarAuction إمكانية تقنية للمشاركة في المزايدة، لكنها ليست مسؤولة عن العمليات المالية بين المستخدم ومنظمي المزادات. جميع الحسابات والعمولات والضرائب والالتزامات المالية الأخرى تحكمها شروط المزاد المحدد ومسؤولية المستخدم مباشرة.',
        },
        availability: {
          title: '4.5. توفر الخدمة',
          content: 'نسعى لضمان تشغيل CarAuction المستمر، لكننا لا نضمن توفر الخدمة المطلق 24/7. قد تحدث انقطاعات تقنية للصيانة أو تحديث النظام أو بسبب ظروف خارجة عن سيطرتنا (أعطال الاتصال بالإنترنت، هجمات DDoS، إلخ).',
        },
      },
      financial: {
        title: '5. الالتزامات المالية للمستخدم',
        intro: 'يتعهد المستخدم بـ:',
        items: [
          { label: 'دفع اللوتات المكتسبة في الوقت المناسب', description: 'وفقاً لشروط المزاد المحدد والمواعيد النهائية المحددة من قبل المنظمين' },
          { label: 'دفع عمولة خدمة CarAuction', description: 'حسب الأسعار الحالية التي تم الاتفاق عليها عند منح الوصول إلى المنصة' },
          { label: 'تحمل جميع التكاليف', description: 'المتعلقة بتسليم المركبة والتخليص الجمركي والتأمين والخدمات الإضافية الأخرى' },
          { label: 'الوفاء بجميع الالتزامات الضريبية', description: 'وفقاً لتشريعات بلدك' },
        ],
        note: 'في حالة عدم الدفع في الوقت المناسب للوت المكتسب أو عمولة الخدمة، يحق لـ CarAuction تعليق أو حظر وصول المستخدم إلى المنصة حتى سداد الديون.',
      },
      rights: {
        title: '6. حقوق والتزامات الأطراف',
        company: {
          title: '6.1. حقوق CarAuction',
          items: ['حظر وصول المستخدم لانتهاك شروط الاستخدام', 'إجراء تغييرات على البرنامج ووظائف الخدمة', 'تغيير أسعار الخدمات (مع إشعار مسبق للمستخدمين)', 'طلب تقديم معلومات صحيحة وحديثة أثناء التسجيل', 'مراقبة استخدام الخدمة لضمان الأمان والجودة'],
        },
        user: {
          title: '6.2. التزامات المستخدم',
          items: ['استخدام الخدمة وفقاً لهدفها وفي حدود التشريعات المعمول بها', 'عدم نشر الفيروسات أو الكود الضار أو محاولة الحصول على وصول غير مصرح به إلى النظام', 'عدم استخدام البرنامج لأغراض أو أنشطة غير قانونية', 'عدم نقل وصول الحساب لأطراف ثالثة بدون إذن الشركة', 'إبلاغ في الوقت المناسب عن التغييرات في بيانات الاتصال', 'الامتثال لقواعد التداول المحددة من قبل منظمي المزادات'],
        },
      },
      intellectual: {
        title: '7. الملكية الفكرية',
        content: [
          'جميع الحقوق في برنامج CarAuction، بما في ذلك التصميم والرمز والشعارات والعلامات التجارية، تنتمي إلى شركة CarAuction ومحمية بقوانين الملكية الفكرية. يحصل المستخدم على ترخيص محدود وغير حصري وغير قابل للتحويل لاستخدام البرنامج حصرياً للأغراض الشخصية أو التجارية ضمن وظائف الخدمة.',
          'يحظر النسخ أو التعديل أو التوزيع أو الهندسة العكسية أو إجراءات أخرى تهدف إلى الكشف عن أو استخدام كود مصدر البرنامج بدون إذن كتابي من الشركة.',
        ],
      },
      liability: {
        title: '8. تحديد المسؤولية',
        intro: 'إلى أقصى حد مسموح به بموجب القانون المعمول به، لا تكون CarAuction مسؤولة عن:',
        items: ['الأضرار المباشرة أو غير المباشرة أو العرضية أو الناتجة المتعلقة باستخدام أو عدم القدرة على استخدام الخدمة', 'فقدان الأرباح أو البيانات أو السمعة أو القيم غير الملموسة الأخرى', 'إجراءات أطراف ثالثة، بما في ذلك منظمي المزادات', 'الأعطال التقنية أو انقطاعات في تشغيل الخدمة', 'الإجراءات غير القانونية للمستخدمين أو أطراف ثالثة'],
      },
      changes: {
        title: '9. التغييرات في شروط الاستخدام',
        content: [
          'نحتفظ بالحق في إجراء تغييرات على شروط الاستخدام هذه. سنخطرك بالتغييرات الكبيرة عبر البريد الإلكتروني أو رسالة في البرنامج. من خلال الاستمرار في استخدام الخدمة بعد إجراء التغييرات، فإنك تؤكد موافقتك على الشروط المحدثة.',
          'نوصي بمراجعة هذه الصفحة دورياً للتعرف على النسخة الحالية من شروط الاستخدام.',
        ],
      },
      termination: {
        title: '10. إنهاء الوصول',
        intro: 'يحق لـ CarAuction تعليق أو إنهاء توفير الوصول إلى الخدمة في حالة:',
        items: ['انتهاك المستخدم لأحكام شروط الاستخدام هذه', 'إجراءات غير مشروعة أو محاولات إلحاق الضرر بالخدمة', 'عدم الدفع في الوقت المناسب للعمولة أو اللوت المكتسب', 'تقديم معلومات كاذبة أثناء التسجيل', 'نشاط المستخدم غير القانوني'],
      },
      jurisdiction: {
        title: '11. القانون الواجب التطبيق وحل النزاعات',
        content: 'يتم تحكم هذه الشروط وتفسيرها وفقاً لتشريعات أوكرانيا. يجب حل جميع النزاعات الناشئة فيما يتعلق بهذه الشروط أو استخدام الخدمة من خلال المفاوضات، وفي حالة عدم التوصل إلى اتفاق — وفقاً لتشريعات أوكرانيا المعمول بها.',
      },
      contact: {
        title: '12. معلومات الاتصال',
        intro: 'لجميع الأسئلة المتعلقة بشروط الاستخدام هذه، يمكنك الاتصال بنا:',
        emailLabel: 'البريد الإلكتروني:',
        phoneLabel: 'الهاتف:',
        email: 'info@carauction.com',
        phone: '+380 (98) 986 03 25',
      },
    },
  },
}

