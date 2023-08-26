import getProducts from "@/actions/get-Products";
import ProductList from "@/components/product-list";
import React from "react";

const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div className="flex flex-col  bg-[#111827] ">
            <div className=" flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 mt-20">
                <ProductList title="Our Products" data={products["products"]} />
            </div>
        </div>
    )
};

export default ProductsPage;
