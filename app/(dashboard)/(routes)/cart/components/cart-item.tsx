"use client"
import { X } from "lucide-react"
import Image from "next/image"
import IconButton from "@/components/ui/icon-button"
import useCart from "@/hooks/use-cart"
import { useEffect, useState } from "react"
import Currency from "@/components/currency"
import { Product } from "@/types/product"

interface CartItemProps {
    data: Product
}

const CartItem: React.FC<CartItemProps> = ({ data }) => {

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true);
    }, [])

    const cart = useCart();


    if (!isMounted) {
        return null;
    }

    const onRemove = () => {
        cart.removeItem(data.id)
    }

    return (
        <div className=" flex py-6 border-b">
            <div className=" relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image fill src={data.images[0]} className=" object-cover object-center" alt="" />
            </div>
            <div className=" relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className=" absolute z-10 right-0 top-0">
                    <IconButton icon={<X size={15} onClick={onRemove} />} />
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className=" flex justify-between">
                        <p className=" text-lg font-semibold text-white">
                            {data.title}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-white ">
                            {data.brand}
                        </p>
                        <p className="text-white ml-4 border-l border-gray-200 pl-4">
                            {data.category}
                        </p>

                    </div>
                    <p className=" text-white">
                        <Currency value={data.price} />
                    </p>

                </div>
            </div>
        </div>
    )
}

export default CartItem