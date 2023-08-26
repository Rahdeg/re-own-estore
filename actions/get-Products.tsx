const url = 'https://dummyjson.com/products'


const getProducts = async (): Promise<any[]> => {

    const res = await fetch(url, { next: { revalidate: 0 } });
    return res.json();

}

export default getProducts;