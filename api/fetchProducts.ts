export type Products = Product[]

export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  creationAt: string
  updatedAt: string
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
  creationAt: string
  updatedAt: string
}

const fetchProducts = async () => {
  const response = await fetch('https://api.escuelajs.co/api/v1/products?offset=0&limit=10');
  const data : Products = await response.json();
  return data;
};

export default fetchProducts;
