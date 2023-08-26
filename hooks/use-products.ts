import { Product } from "@/types/product";
import { create } from "zustand";

interface StoreProductsProps {
  items: Product[];
  addItem: (data: Product[]) => void;
}

const useStoreProducts = create<StoreProductsProps>((set: any) => ({
  items: [],
  addItem: (data: Product[]) => {
    set({ items: data });
  },
}));

export default useStoreProducts;
