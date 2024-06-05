import create from "zustand";
import { Category } from "@/api/fetchProducts";
import { persist } from "zustand/middleware";
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  images: string[];
  creationAt: string;
  updatedAt: string;
  category: Category;
}
interface Message {
  title: string;
  message: string;
  sender: string;
  time: string;
}
interface State {
  favorites: string[];
  message: Message;
  messages: Message[];
  addToFavorites: (product: Product) => void;
  removeFromFavorites: (productId: number) => void;
  products: Product[];
  setProducts: (products: Product[]) => void;
  setSortIncreasing: (products: Product[]) => void;
  setSortDecreasing: (products: Product[]) => void;
  toggleFavorite: (productId: string) => void;
  setFavorites: (favorites: string[]) => void;
  setMessage: (message: Message) => void;
  setMessages: (message: Message) => void;
  sendMessage: () => void;
}
const useStore = create<State>()(
  persist(
    (set) => ({
      products: [],
      favorites: [],
      messages: [
        {
          title: "Merhaba :wave:",
          message: "Bugün sana nasıl yardımcı olabilirim?",
          sender: "bot",
          time: "18.03",
        },
        {
          title: "",
          message:
            "Merhaba, yarın iş arkadaşlarımla bir akşam yemeğine çıkıyorum, şık parçalar giymek istiyorum.",
          sender: "client",
          time: "18.05",
        },
      ],
      message: {
        title: "",
        message: "",
        sender: "",
        time: "",
      },
      setMessage: (content) => set(() => ({ message: content })),
      setProducts: (products) => set(() => ({ products })),
      sendMessage: () =>
        set((state) => ({
          messages: [...state.messages, state.message],
        })),
      setMessages: (message) => set(() => ({ message })),
      setSortIncreasing: (products) =>
        set(() => ({
          products: [...products].sort((a, b) => b.price - a.price),
        })),
      setSortDecreasing: (products) =>
        set(() => ({
          products: [...products].sort((a, b) => a.price - b.price),
        })),
      setFavorites: (favorites: string[]) => set(() => ({ favorites })),
      toggleFavorite: (productId: string) =>
        set((state) => {
          const isFavorite = state.favorites.includes(productId.toString());
          return {
            favorites: isFavorite
              ? state.favorites.filter((id) => id !== productId.toString())
              : [...state.favorites, productId.toString()],
          };
        }),
      addToFavorites: (product: Product) =>
        set((state) => ({
          favorites: [...state.favorites, product.id.toString()],
        })),
      removeFromFavorites: (productId: number) =>
        set((state) => ({
          favorites: state.favorites.filter(
            (id) => id !== productId.toString()
          ),
        })),
    }),
    {
      name: "favorite-products-storage",
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
export default useStore;
