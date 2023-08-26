"use client"
import { ShoppingCart } from "lucide-react"
import Currency from "./currency"
import { Button } from "./ui/button"
import useCart from "@/hooks/use-cart"
import { Product } from "@/types/product"

interface infoProps {
    data: Product
}

const Info: React.FC<infoProps> = ({ data }) => {

    const cart = useCart();

    const addToCart = () => {
        cart.addItem(data);
    }
    return (
        <div>
            <h1 className=" text-3xl font-bold text-gray-900 mt-10">
                {data.title}
            </h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl text-gray-900">
                    <Currency value={data?.price} />
                </p>
            </div>
            <hr className="my-4" />
            <div className="flex flex-col gap-y-6">
                <div className=" flex items-center gap-x-4">
                    <h3 className=" font-semibold text-black"> Stock:</h3>
                    <div>
                        {data?.stock}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className=" font-semibold text-black">Brand:</h3>
                    <div>
                        {data?.brand}
                    </div>
                </div>
                <div className="flex items-center gap-x-4">
                    <h3 className=" font-semibold text-black">Description:</h3>
                    <div>
                        {data?.description}
                    </div>
                </div>
            </div>
            <div className=" mt-10 flex items-center gap-x-3">
                <Button className=" flex items-center gap-x-2 mb-5" onClick={addToCart}>
                    Add to Cart
                    <ShoppingCart />
                </Button>
            </div>


        </div>
    )
}

export default Info