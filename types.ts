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