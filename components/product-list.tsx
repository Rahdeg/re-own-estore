"use client"
import { useEffect, useState } from "react"
import NoResults from "./no-result"
import ProductCard from "./product-card"
import useCart from "@/hooks/use-products"
import { Product } from "@/types/product"


interface ProductListProps {
    title: string
    data: Product[]
}

const ProductList: React.FC<ProductListProps> = ({ title, data }) => {

    const addItems = useCart((state) => state.addItem);

    useEffect(() => {
        addItems(data)
    }, [addItems, data]);

    const products = useCart((state) => state.items);

    return (
        <div className=" space-y-4">
            <h3 className=" font-bold text-3xl text-center text-white">
                {title}
            </h3>
            {products.length === 0 && <NoResults />}
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    products.map((item) => (
                        <ProductCard data={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default ProductList