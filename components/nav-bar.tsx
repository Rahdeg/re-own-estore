"use client"
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import NavbarActions from "./navbar-actions";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import MobileSidebar from "./mobile-sidebar";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useRouter } from "next/navigation";
import { UserButton, auth } from "@clerk/nextjs";



const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

interface NavbarProps {
    userId?: string | null
}

const Navbar = ({ userId }: NavbarProps) => {
    const router = useRouter()


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
            <Select onValueChange={(value) => router.push(`/${value}`)}>
                <SelectTrigger className="w-[180px] hidden md:flex bg-white">
                    <SelectValue placeholder="Explore" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="dashboard">Dashboard</SelectItem>
                    <SelectItem value="products">Products</SelectItem>
                    <SelectItem value="categories">Categories</SelectItem>
                    <SelectItem value="orders">Orders</SelectItem>
                </SelectContent>
            </Select>


            <div className='flex items-center gap-x-3'>
                <NavbarActions />
                {
                    userId ? (<UserButton afterSignOutUrl='/' />) : (
                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    )
                }



            </div>
        </div>
    );
};

export default Navbar;
