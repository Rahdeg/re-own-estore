"use client"

import Image from "next/image"
import { Expand, ShoppingCart } from "lucide-react"
// import Currency from "./currency"
import { useRouter } from "next/navigation"
import { MouseEventHandler, useEffect, useState } from "react"
import IconButton from "./icon-button"
import Currency from "./currency"
// import usePreviewModal from "@/hooks/use-preview-modal"
// import useCart from "@/hooks/use-cart"

interface ProductCardProps {
    data: any
}


const ProductCard: React.FC<ProductCardProps> = ({
    data
}) => {

    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter();
    // const previewModal = usePreviewModal();
    // const cart = useCart();


    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }



    const handleClick = () => {
        router.push(`/product/${data.id}`);
    }

    //  const onPreview: MouseEventHandler<HTMLButtonElement> =(event)=>{
    //     event.stopPropagation();
    //     previewModal.onOpen(data)
    //  }

    //  const onAddToCart: MouseEventHandler<HTMLButtonElement> =(event)=>{
    //     event.stopPropagation();
    //    cart.addItem(data)
    //  }

    return (
        <div className=" bg-white group cursor-pointer rounded-xl border p-3 space-y-4" onClick={handleClick}>
            {/* Images and Actions */}
            <div className=" aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    alt="image"
                    src={data?.images?.[0]?.url}
                    fill
                    className="aspect-square object-cover rounded-md"
                />
                <div className=" opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
                    <div className=" flex gap-x-6 justify-center">
                        <IconButton onClick={() => { }} icon={<Expand size={20} className=" text-gray-600" />} />
                        <IconButton onClick={() => { }} icon={<ShoppingCart size={20} className=" text-gray-600" />} />
                    </div>
                </div>
            </div>
            {/* Description */}
            <div>
                <p className=" font-semibold text-lg">
                    {data.name}
                </p>
                <p className=" text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>
            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    )
}

export default ProductCard