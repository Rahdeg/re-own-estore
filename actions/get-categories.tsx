import { ProductListResponse } from "@/types/product";

const URL = 'https://dummyjson.com/products/category';

const getCategories = async (category: string): Promise<ProductListResponse> => {
    const res = await fetch(`${URL}/${category}`, { next: { revalidate: 0 } });
    return res.json();

}

export default getCategories;