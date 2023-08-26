const URL = 'https://dummyjson.com/products/category';

const getCategories = async (category: string): Promise<any> => {
    const res = await fetch(`${URL}/${category}`, { next: { revalidate: 0 } });
    return res.json();

}

export default getCategories;