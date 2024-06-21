import type { Branch } from '~/types'

const BRANCH_PARTNERS: Record<string, Branch> = {
  uzb: {
    id: 1,
    title: 'Авторизованный деловой партнер в Узбекистане ООО «BLU BIOMEDICAL»',
    country: 'Республика Узбекистан',
    index: '100015',
    city: 'Ташкент',
    address: 'улица А. Каххара, 56А, офис 703, Бизнес-центр "Ventum Plaza"',
    phone: '+998 (55) 508 02 43',
    email: 'main@bioline.ru',
    map: [30.3136, 59.972014]
  },
  kz: {
    id: 2,
    title: 'Авторизованный деловой партнер в Казахстане ТОО "БиоЛайн-Казахстан"',
    country: 'Республика Казахстан',
    index: '010000',
    city: 'Астана',
    address: 'пр-т Кабанбай Батыра, д. 11/5, каб. 1008, 1009 (10 этаж), Бизнес-центр "Нурлы Орда"',
    phone: '+7 (7172) 79 05 39',
    email: 'main@bioline.ru',
    map: [30.3136, 59.972014]
  }
}

export default BRANCH_PARTNERS