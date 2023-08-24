import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import Link from "next/link";
import React from "react";
import SearchInput from "./search-input";

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

            <div className='flex items-center gap-x-2'>

                {/* <Cart/> */}

                {/* <UserButton afterSignOutUrl='/' /> */}
            </div>
        </div>
    );
};

export default Navbar;
