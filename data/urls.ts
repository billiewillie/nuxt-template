type Key = 'index'
  | 'news'
  | 'events'
  | 'inStock'
  | 'catalog'
  | 'manufacturers'

const URLs: Record<Key, string> = {
  index: `/index`,
  news: '/news',
  events: '/events/index',
  inStock: '/stock/show/all',
  catalog: '/catalog',
  manufacturers: '/manufacturers'
}

export default URLs