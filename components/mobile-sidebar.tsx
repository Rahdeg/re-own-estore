import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { LayoutDashboard, ListOrdered, LucideBoomBox, Menu } from "lucide-react"
import Link from "next/link";

const MobileSidebar = () => {


  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu className=" w-7 h-7 text-purple-800" />
      </SheetTrigger>
      <SheetContent side='left' className="p-0 bg-secondary pt-12  w-36">
        <div className=" flex flex-col items-start px-2 mt-3 gap-2 ">
          <Link href="/">
            <h1 className=" text-2xl  font-bold text-primary text-purple-900">
              E-STORE
            </h1>
          </Link>
          <Link href="/products" className=' font-bold flex items-center justify-center text-lg  text-purple-900'>
            <LucideBoomBox className="w-6 h-6 mr-2 text-purple-900" />
            Products
          </Link>
          <Link href="/dashboard" className='flex items-center justify-center text-lg font-bold text-purple-900'>
            <LayoutDashboard className="w-6 h-6 mr-2 text-purple-900" />
            Dashboard
          </Link>
          <Link href="/" className='flex items-center justify-center text-lg font-bold text-purple-900'>
            <ListOrdered className="w-6 h-6 mr-2 text-purple-900" />
            Orders
          </Link>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar