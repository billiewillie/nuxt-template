import type { ManufacturerButton, SearchCategory, Service } from '~/types'

export const SERVICE: Service = {
  phone: '+7 (800) 444 33 49',
  email: 'service@bioline.ru'
}

export const YEARS: number[] = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2
]

export const MANUFACTURER_BUTTONS: ManufacturerButton[] = [
  {
    title: 'Производители "БиоЛайн"',
    value: 'bioline'
  },
  {
    title: 'Производители "БиоСистемы"',
    value: 'biosystemy'
  }
]

export const SEARCH_CATEGORIES: SearchCategory[] = [
  {
    title: 'Все',
    value: 'all'
  },
  {
    title: 'Каталог',
    value: 'catalog',
    subCategories: [
      {
        title: 'Оборудование',
        value: 'equipment'
      },
      {
        title: 'Расходные материалы',
        value: 'expendable_material'
      }
    ]
  },
  {
    title: 'Производители',
    value: 'manufacturer'
  },
  {
    title: 'А-Я',
    value: 'alphabet'
  }
]

export const SEARCH_LENGTH = 3