// Product type
export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

// Generic API Response
export interface AllproductResponse {
  success: boolean;
  message: string;
  data: Product[];
}
