import type { Branch } from '~/types'

const BRANCHES: Record<string, Branch> = {
  spb: {
    id: 1,
    country: 'Россия',
    index: 197022,
    city: 'Санкт-Петербург',
    address: 'ул. Профессора Попова, д. 23, лит. Е',
    phone: '+7 (812) 320 49 49',
    email: 'main@bioline.ru',
    map: [30.3136, 59.972014]
  },
  minsk: {
    id: 2,
    country: 'Республика Беларусь',
    index: 220123,
    city: 'Минск',
    address: 'ул. В. Хоружей, 32 а',
    phone: '+375 17 399 43 79',
    email: 'main@bioline.ru',
    map: [27.56265, 53.92365]
  },
  msk: {
    id: 3,
    country: 'Россия',
    index: 127055,
    city: 'Москва',
    address: 'Бутырский вал, дом68/70, стр. 1, Бизнес-центр "Baker Plaza", 3 этаж, офис 34',
    phone: '+7 (800) 555 49 40',
    email: 'main@bioline.ru',
    map: [37.589, 55.7888]
  },
  novosibirsk: {
    id: 4,
    country: 'Россия',
    index: 630099,
    city: 'Новосибирск',
    address: 'ул. Вокзальная магистраль, д. 16, Бизнес-центр "На Вокзальной магистрали", офис 902',
    phone: '+7 (800) 555 49 40',
    email: 'main@bioline.ru',
    map: [82.914, 55.0316]
  },
  nn: {
    id: 5,
    country: 'Россия',
    index: 603057,
    city: 'Нижний Новгород',
    address: 'ул. Бекетова д. 13 "В", Бизнес-центр "Портал", офис 201',
    phone: '+7 (831) 278 61 47',
    email: 'main@bioline.ru',
    map: [43.998827, 56.290260]
  }
}

export default BRANCHES