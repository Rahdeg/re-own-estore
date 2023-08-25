const url = 'https://dummyjson.com/products?limit=16&skip=10'


const getProducts = async (): Promise<any[]> => {

    const res = await fetch(url, { next: { revalidate: 0 } });
    return res.json();

}

export default getProducts;