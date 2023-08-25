import { create } from "zustand";

interface StoreProductsProps {
  items: any[];
  addItem: (data: any) => void;
}

const useStoreProducts = create<StoreProductsProps>((set: any) => ({
  items: [],
  addItem: (data: any) => {
    set({ items: data });
  },
}));

export default useStoreProducts;
