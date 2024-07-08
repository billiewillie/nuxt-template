interface City {
  id: number
  title: string
  url: string
}

interface Product {
  id: number
  title: string
  preview_img: string
  url: string
  content: string
  sort: number
  is_favourites: number
  is_comparison: number
  is_partition: number
  slug: string
}

interface Country {
  id: number
  title: string
  url: string
  cities: Array<City>
}

interface Section {
  title: string
}

interface Category {
  id: number
  title: string
}

interface Metadata {
  lang: string
  charset: string
  robots: string
  title: string
  description: string
  keywords: string
}

interface BreadCrumb {
  slug: string
  title: string
}

export interface News {
  annotation: string,
  created_at: string,
  id: number,
  preview_img: string,
  title: string,
  url: string,
  section: Array<Section>,
  content: HTMLElement,
  year: number
  recommendations: Array<Recommendation>
  banner: string
}

interface Manufacturer {
  id: number
  title: string
  logo: string
  url: string
  article?: string
  sort?: number
  created_at?: string
}

interface Recommendation {
  id: number
  title: string
  url: string
  preview_img: string
  annotation: string
  created_at: string
}

interface NewProductList {
  id: number
  title: string
  url: string
  sort: number
  is_comparison: number
  is_favourites: number
  preview_img: string
}

interface NewProductTitle {
  id: number
  title: string
}

export type CatalogInnerPageType = Record<string, string>

export type NavigationItem = {
  id: number
  title: string
  slug: string
  href: string
}

export interface Event {
  id: number
  title: string
  url: string
  annotation: string
  preview_img: string
  date_end: string
  date_start: string
}

export interface Events {
  list: Array<Event>
  all_events_month: Array<Event>
  countries: Array<Country>
  categories: Array<Category>
}

export interface Branch {
  id: number
  phone: string
  title: string
  city?: string
  country?: string
  index?: string
  address?: string
  email?: string
  map?: number[]
}

export interface Article {
  id: number
  title: string
  url: string
  preview_img: string,
  created_at: string,
  annotation: string
}

export interface IndexPageApi {
  catalog: Array<string>
  calendar: Events
  content: string,
  created_at: string,
  id: number,
  title: string,
  template: string,
  url: string,
  manufacturers: Array<Manufacturer>,
  news: Array<Omit<News, 'year' | 'content' | 'recommendations' | 'banner'>>,
  metadata: Metadata,
  new_products: {
    title: Array<NewProductTitle>,
    list: Array<NewProductList>
  }
}

export interface ProductPageApi {
  id: number
  sort: number
  title: string
  preview_img: string
  url: string
  bread_crumbs: Array<BreadCrumb>
  is_page: string
  template: string
  content: string
  metadata: Metadata
  manufacturers: Array<Manufacturer>
}

export interface InStockCategory {
  id: number
  title: string
  list: Array<Product>
}

export interface ProductCategory {
  id: number
  title: string
  slug: string
  icon: string
}

export interface ManufacturerButton {
  title: string
  value: string
}

export interface ManufacturersPageApi {
  id: number
  title: string
  url: string
  content: string
  template: string
  created_at: string
  metadata: Metadata
  manufacturers: Array<Manufacturer>
}

export interface ManufacturerCategory {
  id: number
  lang_id: number
  title: string
  url: string
  logo: string
  sort?: number
  created_at?: string
  list: Array<Manufacturer>
}

export interface ProductCategoryPageApi extends Category {
  url: string
  content: string
  is_page: string
  template: string
  created_at: string
  metadata: Metadata
  preview_img: string
  list: Array<Product>
  bread_crumbs: Array<BreadCrumb>
}