type Key =
  'index'
  | 'news'
  | 'newsArticle'
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
  | 'vacancies'

const URLs: Record<Key, string> = {
  index: `/index`,
  news: '/news/all',
  newsArticle: '/news',
  events: '/events/index',
  inStock: '/stock/show/all',
  catalog: '/catalog',
  manufacturers: '/manufacturers',
  comparison: '/comparison',
  vacancies: '/vacancies',
  productsOrderForm: '/feedback/product',
  indexPageForm: '/feedback/index',
  inStockPageForm: '/feedback/in-stock',
  wishlistPageForm: '/feedback/find-nothing',
  productsExpandableOrderForm: '/feedback/expendable-material'
}

export default URLs
