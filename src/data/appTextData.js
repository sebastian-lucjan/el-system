export const elSystemInfo = {
  name: 'el system',
  owner: 'Tomasz Pietras',
  companyInfo: {
    headline: 'O firmie',
    textParagraphs: [
      'Przedsiębiorstwo Techniczno–Usługowe Elsystem jest firmą istniejącą w branży elektroenergetycznej od ponad 10 lat. Jako wykwalifikowany i doświadczony zespół inżynierów świadczymy szeroki zakres usług projektowych i wdrożeniowych w zakresie sieci, urządzeń i instalacji elektroenergetycznych oraz instalacji teletechnicznych dla energetyki zawodowej, przemysłu i budownictwa. Świadczymy również usługi w zakresie badań i kontroli instalacji i urządzeń elektroenergetycznych.',
      'Oferujemy usługi w zakresie nadzoru inwestorskiego, prowadzenia inwestycji, doradztwa i kierowania robotami budowlanymi w branży elektroenergetycznej.',
      'Serdecznie zachęcamy Państwa do zapoznania się z informacjami o naszej działalności lub złożenia konkretnego zapytania dotyczącego oferty. Skontaktujemy się z Państwem tak szybko jak to będzie możliwe.',
    ],
  },
  offer: {
    headline: 'Oferta',
    offers: [
      {
        headline:
          'Projektowanie i wykonawstwo sieci, instalacji i urządzeń elektroenergetycznych oraz  Instalacji teletechnicznych',
        iconName: 'clarity:design-line',
        description:
          'Zajmujemy się projektowaniem i wykonawstwem sieci elektroenergetycznych SN i nn, stacji transformatorowych, rozdzielnic SN i nn oraz instalacji elektroenergetycznych i teletechnicznych – SSP, KD, CCTV, DSO . Świadczymy usługi dla sektora energetyki zawodowej, przemysłu i budownictwa ogólnego (budynki handlowe, użyteczności publicznej, budynki mieszkalne).',
      },
      {
        headline: 'Kontrola stanu technicznego instalacji i urządzeń elektroenergetycznych',
        iconName: 'si-glyph:magnifier',
        description:
          'Wykonujemy badania odbiorcze i okresowe instalacji i urządzeń elektroenergetycznych oraz instalacji odgromowych.',
      },
      {
        headline: 'Instalacje fotowoltaiczne',
        iconName: 'mdi:solar-power',
        description:
          'Projektujemy i wdrażamy rozwiązania z zakresu instalacji fotowoltaicznych – od mikroinstalacji do farm fotowoltaicznych.',
        sliderImgName: 'photovoltaic-power.jpeg',
      },
      {
        headline: 'Automatyka budynkowa.',
        iconName: 'fluent:device-meeting-room-remote-32-regular',
        description:
          'Projektujemy i wdrażamy rozwiązania z zakresu automatyki budynkowej dopasowane do potrzeb i oczekiwań klienta.',
      },
      {
        headline: 'Rozwiązania dla przemysłu',
        iconName: 'mdi-light:factory',
        description:
          'Projektujemy i wdrażamy rozwiązania z zakresu automatyki przemysłowej dopasowane do potrzeb i oczekiwań klienta.',
        sliderImgName: 'factory.jpeg',
      },
      {
        headline: 'Doradztwo techniczne, nadzory inwestorskie',
        iconName: 'mdi:help-network-outline',
        description:
          'Oferujemy kompleksowy i fachowy nadzór nad wszelkiego rodzaju pracami elektroinstalacyjnymi. Świadczymy usługi w zakresie pełnienia nadzoru inwestorskiego i kierowania robotami budowlanymi.',
        sliderImgName: 'inspection-person.jpeg',
      },
      {
        headline: 'Analizy techniczne',
        iconName: 'mdi:select-search',
        description:
          'Wykonujemy analizy techniczne obejmujące m.in. możliwości przyłączania odnawialnych źródeł energii (OZE) oraz analizy współpracy źródeł z siecią (analizy napięciowe, koordynacja zabezpieczeń).',
      },
      {
        headline: 'Automatyka elektroenergetyczna',
        iconName: 'mdi:robot-industrial',
        description:
          'Zajmujemy się projektowaniem układów automatyki elektroenergetycznej i układów telemechaniki dla potrzeb OZE i innych obiektów elektroenergetycznych.',
      },
      {
        headline: 'Inne usługi:',
        iconName: 'fluent:document-bullet-list-20-regular',
        description: '',
        others: [
          'Analiza jakości energii,',
          'Analiza możliwości optymalizacji kosztów energii,',
          'Projektowanie układów kompensacji mocy biernej,',
          'Adaptacja i optymalizacja projektów typowych.',
        ],
      },
    ],
  },
  cooperation: {
    headline: 'Współpraca',
    companies: [
      'PGE Dystrybucja S.A',
      'MPWiK Sp. z o.o. Lublin',
      '081 Architekci',
      'Biuro Architektoniczne Marcin Tatar',
      'In Loft Deweloper',
      'Kwadrat Deweloper',
      'Elekromontaż S.A',
      'Trakcja PRKII',
      'Elektroinstal Chełm ',
    ],
  },
  contact: {
    headline: 'Kontakt',
    office: {
      headline: 'Biuro',
      address: {
        street: 'ul. Tadeusza Jacyny-Onyszkiewicza 60',
        postalCode: '20-781',
        city: 'Lublin',
      },
      phoneNrs: ['603 095 642', '535 920 293'],
      email: 'podany.jak@będzie.domena',
    },
    companiesData: {
      headline: 'Dane Firmy',
      name: {
        suffix: 'Przedsiębiorstwo Techniczno-Usługowe',
        mainName: 'Elsystem Tomasz Pietras',
      },
      address: 'ul. Guliwera 11, 20-714 Lublin',
      nip: '712-286-95-53',
      regon: '060674447',
      bankAccount: {
        headline: 'konto bankowe:',
        name: 'ING Bank Śląski S.A.',
        account: {
          headline: 'nr konta:',
          number: '67 1050 1461 1000 0090 7599 2967',
        },
      },
    },
  },
};

export const websiteData = {
  logo: 'el system',
  navigation: [
    { buttonText: 'O firmie', name: 'company', path: '/firma' },
    { buttonText: 'Oferta', name: 'offer', path: '/oferta' },
    { buttonText: 'Współpraca', name: 'cooperation', path: '/wspolpraca' },
    { buttonText: 'Kontakt', name: 'contact', path: '/kontakt' },
  ],
  buttons: {
    sliderBtn: 'Skontaktuj się',
  },
};
