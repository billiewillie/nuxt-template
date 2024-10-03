type Key = 'index' | 'news' | 'events' | 'inStock' | 'catalog' | 'manufacturers' | 'comparison'

const URLs: Record<Key, string> = {
  index: `/index`,
  news: '/news',
  events: '/events/index',
  inStock: '/stock/show/all',
  catalog: '/catalog',
  manufacturers: '/manufacturers',
  comparison: '/comparison',
}

export default URLs
