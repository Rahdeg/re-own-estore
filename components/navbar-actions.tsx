"use client"

import { ShoppingBag } from "lucide-react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "./ui/button"
// import { ModeToggle } from "./theme-toggle"

const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true);
  }, [])

  // const cart = useCart();
  const router = useRouter();


  if (!isMounted) {
    return null;
  }

  return (

    <div className="ml-auto flex items-center gap-x-4">
      {/* <ModeToggle/> */}
      <Button className=" flex items-center  rounded-lg px-4 py-2" variant='default' onClick={() => router.push("/cart")}>
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          0
        </span>
      </Button>
    </div>
  )
}

export default NavbarActions