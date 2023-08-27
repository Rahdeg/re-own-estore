"use client"

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
import useCart from "@/hooks/use-cart"


const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  const cart = useCart();
  const router = useRouter();


  if (!isMounted) {
    return null;
  }

  return (

    <div className="ml-auto flex items-center gap-x-4">
      <Button className="relative flex items-center rounded-full px-3 py-2" variant='default' onClick={() => router.push("/cart")}>
        <ShoppingBag size={20} color="white" />
        <span className="absolute -top-1 -right-1 text-xs font-medium bg-purple-900 text-white rounded-full w-5 h-5 flex items-center justify-center">
          {cart.items.length}
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions