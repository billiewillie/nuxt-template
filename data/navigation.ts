import type { NavigationItem } from '~/types'

const NAVIGATION: NavigationItem[] = [
  {
    id: 1,
    title: 'Каталог',
    slug: 'catalog',
    href: '/catalog',
    list: [
      {
        'id': 11,
        'title': 'Диагностика онкозаболеваний',
        'href': '/catalog/diagnosis-oncological-diseases',
        'slug': 'diagnosis-oncological-diseases',
        'list': [
          {
            'id': 111,
            'title': 'Проточная цитометрия',
            'href': '/catalog/diagnosis-oncological-diseases/protochnoy-citometrii-doz',
            'slug': 'diagnosis-oncological-diseases/protochnoy-citometrii-doz'
          },
          {
            'id': 112,
            'title': 'Гистология',
            'href': '/catalog/diagnosis-oncological-diseases/gistologiya',
            'slug': 'diagnosis-oncological-diseases/gistologiya'
          },
          {
            'id': 113,
            'title': 'Жидкостная цитология',
            'href': '/catalog/diagnosis-oncological-diseases/zhidkostnaya-citologiya',
            'slug': 'diagnosis-oncological-diseases/zhidkostnaya-citologiya'
          },
          {
            'id': 114,
            'title': 'Иммуногистохимия',
            'href': '/catalog/diagnosis-oncological-diseases/immunogistohimiya',
            'slug': 'diagnosis-oncological-diseases/immunogistohimiya'
          },
          {
            'id': 115,
            'title': 'Молекулярно-генетические исследования в онкологии',
            'href': '/catalog/diagnosis-oncological-diseases/molekulyarno-geneticheskie-issledovaniya-v-onkologii',
            'slug': 'diagnosis-oncological-diseases/molekulyarno-geneticheskie-issledovaniya-v-onkologii'
          },
          {
            'id': 116,
            'title': 'Цитогенетика и FISH-диагностика',
            'href': '/catalog/diagnosis-oncological-diseases/citogenetika-i-fish-diagnostika',
            'slug': 'diagnosis-oncological-diseases/citogenetika-i-fish-diagnostika'
          },
          {
            'id': 117,
            'title': 'Микроскопы и цифровая патология',
            'href': '/catalog/diagnosis-oncological-diseases/mikroskopy-i-cifrovaya-patologiya',
            'slug': 'diagnosis-oncological-diseases/mikroskopy-i-cifrovaya-patologiya'
          }
        ]
      },
      {
        'id': 12,
        'title': 'Диагностика инфекционных заболеваний',
        'href': '/catalog/diagnosis-infectious-diseases',
        'slug': 'diagnosis-infectious-diseases',
        'list': [
          {
            'id': 121,
            'title': 'Проточная цитометрия',
            'href': '/catalog/diagnosis-infectious-diseases/protochnoy-citometrii-diz',
            'slug': 'diagnosis-infectious-diseases/protochnoy-citometrii-diz'
          },
          {
            'id': 122,
            'title': 'Молекулярно-генетические экспресс исследования',
            'href': '/catalog/diagnosis-infectious-diseases/molekulyarno-geneticheskie-ekspress-issledovaniya',
            'slug': 'diagnosis-infectious-diseases/molekulyarno-geneticheskie-ekspress-issledovaniya'
          }
        ]
      },
      {
        'id': 13,
        'title': 'Научные исследования в биологии и медицине',
        'href': '/catalog/scientific-research-biology-and-medicine',
        'slug': 'scientific-research-biology-and-medicine',
        'list': [
          {
            'id': 62,
            'title': 'Молекулярная биология',
            'href': '/catalog/scientific-research-biology-and-medicine/molecular-biology',
            'slug': 'scientific-research-biology-and-medicine/molecular-biology'
          },
          {
            'id': 63,
            'title': 'Проточная цитометрия',
            'href': '/catalog/scientific-research-biology-and-medicine/protochnoy-citometrii-nauchnye-issledovaniya-v-biologii-i-medicine',
            'slug': 'scientific-research-biology-and-medicine/protochnoy-citometrii-nauchnye-issledovaniya-v-biologii-i-medicine'
          },
          {
            'id': 64,
            'title': 'Оптическая микроскопия',
            'href': '/catalog/scientific-research-biology-and-medicine/life-science-microscopy',
            'slug': 'scientific-research-biology-and-medicine/life-science-microscopy'
          },
          {
            'id': 65,
            'title': 'Анализаторы и счётчики клеток',
            'href': '/catalog/scientific-research-biology-and-medicine/cell-analysis',
            'slug': 'scientific-research-biology-and-medicine/cell-analysis'
          },
          {
            'id': 66,
            'title': 'Спектрофотометры для микропланшетов',
            'href': '/catalog/scientific-research-biology-and-medicine/readers-and-washers',
            'slug': 'scientific-research-biology-and-medicine/readers-and-washers'
          },
          {
            'id': 67,
            'title': 'Гистологическая пробоподготовка',
            'href': '/catalog/scientific-research-biology-and-medicine/life-science-histology',
            'slug': 'scientific-research-biology-and-medicine/life-science-histology'
          },
          {
            'id': 68,
            'title': 'Исследования лабораторных животных',
            'href': '/catalog/scientific-research-biology-and-medicine/laboratory-animals',
            'slug': 'scientific-research-biology-and-medicine/laboratory-animals'
          }
        ]
      },
      {
        'id': 14,
        'title': 'Общелабораторное оборудование',
        'href': '/catalog/general-laboratory-equipment',
        'slug': 'general-laboratory-equipment',
        'list': [
          {
            'id': 143,
            'title': 'Термостатирующее оборудование',
            'href': '/catalog/general-laboratory-equipment/termostatiruyushchee-oborudovanie',
            'slug': 'general-laboratory-equipment/termostatiruyushchee-oborudovanie'
          },
          {
            'id': 144,
            'title': 'Стерилизационное и дезинфекционное оборудование',
            'href': '/catalog/general-laboratory-equipment/sterilizacionnoe-i-dezinfekcionnoe-oborudovanie',
            'slug': 'general-laboratory-equipment/sterilizacionnoe-i-dezinfekcionnoe-oborudovanie'
          },
          {
            'id': 145,
            'title': 'Аппараты для приготовления и розлива сред',
            'href': '/catalog/general-laboratory-equipment/apparaty-dlya-prigotovleniya-i-rozliva-sred',
            'slug': 'general-laboratory-equipment/apparaty-dlya-prigotovleniya-i-rozliva-sred'
          },
          {
            'id': 146,
            'title': 'Холодильное и морозильное оборудование',
            'href': '/catalog/general-laboratory-equipment/holodilnoe-i-morozilnoe-oborudovanie',
            'slug': 'general-laboratory-equipment/holodilnoe-i-morozilnoe-oborudovanie'
          },
          {
            'id': 147,
            'title': 'Ламинарно-потоковые шкафы',
            'href': '/catalog/general-laboratory-equipment/laminarno-potokovye-shkafy',
            'slug': 'general-laboratory-equipment/laminarno-potokovye-shkafy'
          },
          {
            'id': 148,
            'title': 'Вспомогательное лабораторное оборудование',
            'href': '/catalog/general-laboratory-equipment/vspomogatelnoe-laboratornoe-oborudovanie',
            'slug': 'general-laboratory-equipment/vspomogatelnoe-laboratornoe-oborudovanie'
          },
          {
            'id': 149,
            'title': 'Лабораторные центрифуги',
            'href': '/catalog/general-laboratory-equipment/laboratornye-centrifugi',
            'slug': 'general-laboratory-equipment/laboratornye-centrifugi'
          },
          {
            'id': 150,
            'title': 'Дозирующие устройства',
            'href': '/catalog/general-laboratory-equipment/doziruyushchie-ustrojstva',
            'slug': 'general-laboratory-equipment/doziruyushchie-ustrojstva'
          },
          {
            'id': 151,
            'title': 'Расходные материалы',
            'href': '/catalog/general-laboratory-equipment/raskhodnye-materialy',
            'slug': 'general-laboratory-equipment/raskhodnye-materialy'
          }
        ]
      },
      {
        'id': 15,
        'title': 'Госпитальная и лабораторная мебель',
        'href': '/catalog/hospital-and-laboratory-furniture',
        'slug': 'hospital-and-laboratory-furniture',
        'list': [
          {
            'id': 116,
            'title': 'Медицинские функциональные электрические кровати Howard Wright',
            'href': '/catalog/hospital-and-laboratory-furniture/medicinskie-funkcionalnye-elektricheskie-krovati-howard-wright',
            'slug': 'hospital-and-laboratory-furniture/medicinskie-funkcionalnye-elektricheskie-krovati-howard-wright'
          },
          {
            'id': 117,
            'title': 'Устройства для перемещения',
            'href': '/catalog/hospital-and-laboratory-furniture/devices-for-moving',
            'slug': 'hospital-and-laboratory-furniture/devices-for-moving'
          }
        ]
      },
      {
        'id': 16,
        'title': 'Преаналитика',
        'href': '/catalog/preanalytics',
        'slug': 'preanalytics',
        'list': [
          {
            'id': 118,
            'title': 'Системы для взятия проб пациента Vacutest KIMA',
            'href': '/catalog/preanalytics/sistemy-dlya-vzyatiya-prob-pacienta-vacutest-kima',
            'slug': 'preanalytics/sistemy-dlya-vzyatiya-prob-pacienta-vacutest-kima'
          },
          {
            'id': 119,
            'title': 'Системы для взятия крови SARSTEDT',
            'href': '/catalog/preanalytics/sistemy-dlya-vzyatiya-krovi-sarstedt',
            'slug': 'preanalytics/sistemy-dlya-vzyatiya-krovi-sarstedt'
          },
          {
            'id': 120,
            'title': 'Автоматические системы штрихкодирования пробирок',
            'href': '/catalog/preanalytics/avtomaticheskie-sistemy-shtrihkodirovaniya-vakuumnyh-probirok',
            'slug': 'preanalytics/avtomaticheskie-sistemy-shtrihkodirovaniya-vakuumnyh-probirok'
          }
        ]
      },
      {
        'id': 17,
        'title': 'Операционная микроскопия и госпитальное оборудование',
        'href': '/catalog/surgical-microscopy',
        'slug': 'surgical-microscopy',
        'list': [
          {
            'id': 195,
            'title': 'Микроскоп операционный Leica M320',
            'href': '/catalog/surgical-microscopy/microscope-leica-m320',
            'slug': 'surgical-microscopy/microscope-leica-m320'
          },
          {
            'id': 196,
            'title': 'Микроскоп Leica M525',
            'href': '/catalog/surgical-microscopy/microscope-leica-m525',
            'slug': 'surgical-microscopy/microscope-leica-m525'
          },
          {
            'id': 197,
            'title': 'Микроскоп Leica PROvido',
            'href': '/catalog/surgical-microscopy/microscope-leica-provido',
            'slug': 'surgical-microscopy/microscope-leica-provido'
          },
          {
            'id': 198,
            'title': 'Микроскоп операционный Leica M530 OHX',
            'href': '/catalog/surgical-microscopy/microscope-leica-m530-ohx',
            'slug': 'surgical-microscopy/microscope-leica-m530-ohx'
          }
        ]
      },
      {
        'id': 18,
        'title': 'Материнство и детство',
        'href': '/catalog/motherhood-and-childhood',
        'slug': 'motherhood-and-childhood',
        'list': [
          {
            'id': 126,
            'title': 'Автоматические пастеризаторы',
            'href': '/catalog/motherhood-and-childhood/avtomaticheskie-pasterizatory',
            'slug': 'motherhood-and-childhood/avtomaticheskie-pasterizatory'
          },
          {
            'id': 127,
            'title': 'Клинические молокоотсосы',
            'href': '/catalog/motherhood-and-childhood/klinicheskie-molokootsosy',
            'slug': 'motherhood-and-childhood/klinicheskie-molokootsosy'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'О нас',
    slug: 'about',
    href: '/about'
  },
  {
    id: 3,
    title: 'Производители',
    slug: 'manufacturers',
    href: '/manufacturers'
  },
  {
    id: 4,
    title: 'На складе',
    slug: 'in-stock',
    href: '/in-stock'
  },
  {
    id: 5,
    title: 'Сервисная служба',
    slug: 'support',
    href: '/support'
  },
  {
    id: 6,
    title: 'Новости',
    slug: 'news',
    href: '/news'
  },
  {
    id: 7,
    title: 'События',
    slug: 'events',
    href: '/events'
  },
  {
    id: 8,
    title: 'Вакансии',
    slug: 'vacancies',
    href: '/vacancies'
  },
  {
    id: 9,
    title: 'Контакты',
    slug: 'contacts',
    href: '/contacts'
  }
]

export default NAVIGATION