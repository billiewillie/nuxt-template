const URLs = {
  index: `/index`,
  news: '/news/all',
  newsArticle: '/news',
  events: '/events/get-list-current-month',
  inStock: '/stock/show/all',
  catalog: '/catalog',
  manufacturers: '/manufacturers',
  comparison: '/comparison',
  vacancies: '/vacancies',
  productsOrderForm: '/feedback/product',
  indexPageForm: '/feedback/index',
  inStockPageForm: '/feedback/in-stock',
  wishlistPageForm: '/feedback/find-nothing',
  productsExpandableOrderForm: '/feedback/expendable-material',
  newProducts: '/new-products/section',
} satisfies Record<string, string>

export default URLs
