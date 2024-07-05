import type { CatalogInnerPageType, ManufacturerButton } from '~/types'

export const SERVICE = {
  phone: '+7 (800) 444 33 49',
  email: 'service@bioline.ru'
}

export const years: number[] = [
  new Date().getFullYear(),
  new Date().getFullYear() - 1,
  new Date().getFullYear() - 2
]

export const CATALOG_INNER_PAGE_TYPE: Record<string, string> = {
  catalog: 'catalog',
  products: 'products',
  expendable_material: 'expendable_material'
}

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