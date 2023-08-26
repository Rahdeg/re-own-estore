"use client"
import { useEffect, useState } from "react"
import NoResults from "./no-result"
import ProductCard from "./product-card"
import useCart from "@/hooks/use-products"


interface SuggestListProps {
    title: string
    data: any[]
}

const SuggestList: React.FC<SuggestListProps> = ({ title, data }) => {

    const addItems = useCart((state) => state.addItem);

    useEffect(() => {
        addItems(data)
    }, [addItems, data]);


    return (
        <div className=" space-y-4">
            <h3 className=" font-bold text-3xl text-center text-white">
                {title}
            </h3>
            {data.length === 0 && <NoResults />}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data.map((item) => (
                        <ProductCard data={item} key={item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default SuggestList