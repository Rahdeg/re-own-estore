"use client"
import axios from "axios";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { toast } from "react-hot-toast";
import Currency from "@/components/currency";
import { Button } from "@/components/ui/button";


const Summary = () => {
    const items = useCart((state) => state.items);
    const removeAll = useCart((state) => state.removeAll);
    const router = useRouter();


    const totalPrice = items.reduce((total, item) => { return total + Number(item.price) }, 0)

    const onCheckout = async () => {
        removeAll();
        toast.success("Payment made Successfully")
        router.push("/dashboard");
    }

    return (
        <div className=" mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
            <h2 className=" text-lg font-medium text-gray-900">
                Order Summary
            </h2>
            <div className=" mt-6 space-y-4">
                <div className=" flex items-center justify-between border-t border-gray-200 pt-4">
                    <div className=" text-base font-medium text-gray-900">
                        Order total
                    </div>
                    <Currency value={totalPrice} />
                </div>
            </div>
            <Button disabled={items.length === 0} className="w-full mt-6" onClick={onCheckout}>
                Checkout
            </Button>
        </div>
    )
}

export default Summary;