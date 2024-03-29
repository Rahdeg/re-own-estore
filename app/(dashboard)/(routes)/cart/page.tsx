"use client"
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react"
import CartItem from "./components/cart-item";
import Summary from "./components/summary";


const CartPage = () => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();


    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }

    return (
        <div className=" flex flex-col  bg-[#111827] space-y-4 px-2">

            <div className="px-4 py-16 sm:px-6 lg:px-8 mt-10">
                <h1 className=" text-3xl font-bold text-white text-center">Shopping Cart</h1>
                <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
                    <div className=" lg:col-span-7">
                        {cart.items.length === 0 && <p className=" text-white">No items added to cart</p>}
                        <ul>
                            {
                                cart.items.map((item) => (
                                    <CartItem key={item.id} data={item} />
                                ))
                            }
                        </ul>
                    </div>
                    <Summary />
                </div>
            </div>

        </div>
    )
}

export default CartPage