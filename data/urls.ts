type Key =
  'index'
  | 'news'
  | 'events'
  | 'inStock'
  | 'catalog'
  | 'manufacturers'
  | 'comparison'
  | 'productsOrderForm'
  | 'productsExpandableOrderForm'
  | 'indexPageForm'
  | 'wishlistPageForm'
  | 'inStockPageForm'

const URLs: Record<Key, string> = {
  index: `/index`,
  news: '/news/all',
  events: '/events/index',
  inStock: '/stock/show/all',
  catalog: '/catalog',
  manufacturers: '/manufacturers',
  comparison: '/comparison',
  productsOrderForm: '/feedback/product',
  indexPageForm: '/feedback/index',
  inStockPageForm: '/feedback/in-stock',
  wishlistPageForm: '/feedback/find-nothing',
  productsExpandableOrderForm: '/feedback/expendable-material'
}

export default URLs
