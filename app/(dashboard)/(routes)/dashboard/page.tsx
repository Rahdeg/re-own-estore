import getProducts from "@/actions/get-Products";
import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import React from "react";

const DashboardPage = async () => {


    const products = await getProducts();
    const allProducts = products.products;



    return (
        <div className=" flex flex-col  bg-[#111827] space-y-4">
            <div className=" sm:px-6 lg:px-8 py-0  rounded-xl overflow-hidden mt-16">
                <Billboard />
            </div>
            <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList title="Featured Products" data={allProducts} />
            </div>
        </div>


    )
};

export default DashboardPage;
