import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { toast } from "react-hot-toast";
import { Product } from "@/types/product";

interface CratStoreProp {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CratStoreProp>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        set({ items: [...get().items, data] });
        toast.success("Item added to cart.");
      },
      removeItem: (id: number) => {
        set({ items: [...get().items.filter((item) => item.id !== id)] });
        toast.success("item removed from the cart.");
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
