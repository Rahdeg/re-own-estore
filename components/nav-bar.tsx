import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import NavbarActions from "./navbar-actions";
import { UserButton } from "@clerk/nextjs";
import { Package2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileSidebar from "./mobile-sidebar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

const Navbar = () => {
    return (
        <div className=" fixed w-full z-50 flex justify-between  items-center py-2 px-4 border-b border-white  h-16 bg-[#111827]">
            <div className='flex items-center'>
                <MobileSidebar />
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-white", font.className)}>
                        E-STORE
                    </h1>
                </Link>
            </div>
            <div className=" w-1/2 md:w-1/3">
                <SearchInput />
            </div>
            <Select >
                <SelectTrigger className="w-[180px] hidden md:flex bg-purple-200">
                    <SelectValue placeholder="products" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="items">Items</SelectItem>
                    <SelectItem value="categories">Categories</SelectItem>
                    <SelectItem value="orders">Orders</SelectItem>
                </SelectContent>
            </Select>


            {/* <div className=" hidden md:flex   items-center space-x-1 ">
                <Link href="/product" className='flex items-center justify-center text-lg font-medium transition-colors hover:text-black'>
                    <Package2 className="w-4 h-4 mr-2" />
                    Product
                </Link>
                <Link href="/product" className='flex items-center justify-center text-lg font-medium transition-colors hover:text-black'>
                    <Package2 className="w-4 h-4 mr-2" />
                    Categories
                </Link>
            </div> */}

            <div className='flex items-center gap-x-2'>
                <NavbarActions />
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

                {/* <UserButton afterSignOutUrl='/' /> */}
            </div>
        </div>
    );
};

export default Navbar;
