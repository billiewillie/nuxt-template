import type { ProductCategory } from '~/types'

const CATEGORIES: Array<ProductCategory> = [
  {
    id: 1,
    title: 'Диагностика онкологических заболеваний',
    slug: 'diagnosis-oncological-diseases',
    icon: '/img/categories/icons/1.svg'
  },
  {
    id: 2,
    title: 'Диагностика инфекционных заболеваний',
    slug: 'diagnosis-infectious-diseases',
    icon: '/img/categories/icons/2.svg'
  },
  {
    id: 3,
    title: 'Научные исследования в биологии и медицине',
    slug: 'scientific-research-biology-and-medicine',
    icon: '/img/categories/icons/3.svg'
  },
  {
    id: 4,
    title: 'Общелабораторное оборудование',
    slug: 'general-laboratory-equipment',
    icon: '/img/categories/icons/4.svg'
  },
  {
    id: 5,
    title: 'Госпитальная и лабораторная мебель',
    slug: 'hospital-and-laboratory-furniture',
    icon: '/img/categories/icons/5.svg'
  },
  {
    id: 6,
    title: 'Преаналитика',
    slug: 'preanalytics',
    icon: '/img/categories/icons/6.svg'
  },
  {
    id: 7,
    title: 'Операционная микроскопия',
    slug: 'surgical-microscopy',
    icon: '/img/categories/icons/7.svg'
  },
  {
    id: 8,
    title: 'Материнство и детство',
    slug: 'motherhood-and-childhood',
    icon: '/img/categories/icons/8.svg'
  }
];

export default CATEGORIES