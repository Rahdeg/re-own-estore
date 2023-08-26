import { Product } from "@/types/product";


const URL = "https://dummyjson.com/products";

const getProduct = async (id: number): Promise<Product> => {
    const res = await fetch(`${URL}/${id}`, { next: { revalidate: 0 } });
    return res.json();

}

export default getProduct;