interface Product {
  id: number
  title: string
  preview_img: string
  url: string
  content: string
  sort: number
  is_favourites: number
  is_comparison: number
}

interface Category {
  id: number
  title: string
}

interface City {
  id: number
  title: string
  url: string
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

interface Manufacturer {
  id: number,
  title: string,
  logo: string,
  url: string
}

interface Metadata {
  charset: string,
  description: string,
  keywords: string,
  lang: string,
  robots: string,
  title: string
}

interface Recommendation {
  id: number
  title: string
  url: string
  preview_img: string
  annotation: string
  created_at: string
}

interface NewProductTitle {
  id: number
  title: string
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

export interface InStockCategory {
  id: number
  title: string
  list: Array<Product>
}