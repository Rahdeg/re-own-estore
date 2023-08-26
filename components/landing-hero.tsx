"use client"
import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import TypewriterComponent from "typewriter-effect"
import { Button } from './ui/button'

const LandingHero = () => {
    const { isSignedIn } = useAuth();

    return (
        <div className=' text-white font-bold py-36 text-center  space-y-12 '>
            <div className=' text-4xl sm:text-5xl md:text-6xl lg:text-7xl space-y-5 font-extrabold'>
                <h1>The Best Online E-Store</h1>
                <div className=' text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mt-10'>
                    <TypewriterComponent
                        options={{
                            strings: [
                                "Appliances",
                                "Gaming",
                                "Computing",
                                "Fashion",
                                "Electronics",
                            ],
                            autoStart: true,
                            loop: true
                        }}
                    />
                </div>
            </div>
            <div>
                <Link href="/products"  >
                    <Button variant="premium" className=' md:text-lg p-4 md:p-6 rounded-full font-semibold'>
                        See Products
                    </Button>
                </Link>
            </div>
            <div className=' text-zinc-400 text-xs md:text-sm font-normal'>
                You definately like what you see !
            </div>
        </div>
    )
}

export default LandingHero