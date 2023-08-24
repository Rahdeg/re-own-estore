import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu, Package2 } from "lucide-react"
import Link from "next/link";






interface MobileSidebarProps {

}

const MobileSidebar = () => {


  return (
    <Sheet>
      <SheetTrigger className='md:hidden pr-4'>
        <Menu />
      </SheetTrigger>
      <SheetContent side='left' className="p-0 bg-secondary pt-12  w-36">
        <div className=" flex flex-col items-start px-2 mt-3 gap-2 ">
          <Link href="/">
            <h1 className="hidden md:block text-xl md:text-3xl font-bold text-primary">
              E-STORE
            </h1>
          </Link>
          <Link href="/product" className='flex items-center justify-center text-lg font-medium transition-colors hover:text-black'>
            <Package2 className="w-4 h-4 mr-2" />
            Product
          </Link>
          <Link href="/product" className='flex items-center justify-center text-lg font-medium transition-colors hover:text-black'>
            <Package2 className="w-4 h-4 mr-2" />
            Categories
          </Link>
        </div>
      </SheetContent>
    </Sheet>

  )
}

export default MobileSidebar