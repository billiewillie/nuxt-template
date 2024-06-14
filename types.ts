export interface Branch {
  id: number;
  country: string | null;
  index: number;
  city: string;
  address: string;
  phone: string;
  email: string;
  map?: number[];
}

export interface Article {
  id: number
  title: string
  url: string
  preview_img: string,
  created_at: string,
  annotation: string
}