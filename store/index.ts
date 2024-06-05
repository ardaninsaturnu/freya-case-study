import create from 'zustand';
import {Category} from "@/api/fetchProducts";
import {persist} from "zustand/middleware";

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

interface Message {
  title: string,
  message: string,
  sender: string,
  time: string
}

interface State {
  products: Product[];
  favorites: string[];
  message: Message;
  messages: Message[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: ( productId: number ) => void;
  setProducts: ( products: Product[] ) => void;
  setMessage: ( message: Message) => void;
  sendMessage: () => void;
  setSortIncreasing: ( product: Product[] ) => void;
  setSortDecreasing: ( product: Product[] ) => void;
  toggleFavorite: ( productId:string ) => void;
  setFavorites: ( favorites: string[] ) => void;
  setMessages: ( messages: Message ) => void;
}


const useStore =create<State>()(
  persist(
  (set) => ({
  products: [],
  increasingProducts: [],
  decreasingProducts: [],
  favorites: [],
  messages: [
    {
      title: 'Merhaba 👋',
      message: 'Bugün sana nasıl yardımcı olabilirim?',
      sender: 'bot',
      time: '18.03'
    },
    {
      title: '',
      message: 'Merhaba, yarın iş arkadaşlarımla bir akşam yemeğine çıkıyorum, şık parçalar giymek istiyorum.',
      sender: 'client',
      time: '18.05'
    }
  ],

  setMessage: (content) => set(() => ({ message: content })),

  setProducts: (products) => set(() => ({ products: products})),

  sendMessage: () => set((state) => ({
    messages: [ ...state.messages, state.message ]
  })),

  setMessages: (content) => set((state) => ({
    messages: [ ...state.messages, content ]
  })),

  setSortIncreasing: (products) => set(() => ({
    increasingProducts: products.sort((a, b) => b.price - a.price)
  })),

  setSortDecreasing: (products) => set(() => ({
    decreasingProducts: products.sort((a, b) => a.price - b.price)
  })),

  setFavorites: (favorites:string[]) => set(() => ({
    favorites: [ ...favorites ]
  })),

  toggleFavorite: (productId) => set((state) => {
    const isFavorite = state.favorites.includes(productId);
    return {
      favorites: isFavorite
        ? state.favorites.filter((id) => id !== productId)
        : [...state.favorites, productId],
      products: state.products.map((product) =>
        product.id === productId ? { ...product, isFavorite: !isFavorite } : product
      ),
    };
  }),
  }
),
{
  name: 'favorite-products-storage',
  partialize: (state) => ({ favorites: state.favorites })
}
  )
);

export default useStore;
