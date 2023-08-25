"use client"
import { Carousel } from "@material-tailwind/react";
import Image from "next/image";
import ImageCarousel from "./ui/couresal";


const Billboard = () => {
  return (
    <div className="p-4 md:px-16 ">
      <ImageCarousel />
    </div>
  )
}

export default Billboard