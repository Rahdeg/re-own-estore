import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";
import NavbarActions from "./navbar-actions";
import { UserButton } from "@clerk/nextjs";
import { Package2 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const font = Poppins({
    weight: "600",
    subsets: ["latin"]
});

const Navbar = () => {
    return (
        <div className="fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary h-16">
            <div className='flex items-center'>
                {/* <MobileSidebar isPro={isPro} /> */}
                <Link href="/">
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary", font.className)}>
                        E-STORE
                    </h1>
                </Link>
            </div>
            <div className=" w-1/3">
                <SearchInput />
            </div>
            <div className=" hidden md:flex   items-center space-x-3 ">
                <Link href="/product" className='flex items-center justify-center text-lg font-medium transition-colors hover:text-black'>
                    <Package2 className="w-4 h-4 mr-2" />
                    Product
                </Link>
            </div>

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
