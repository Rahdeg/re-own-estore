import getCategories from "@/actions/get-categories";
import getProduct from "@/actions/get-product";
import Container from "@/components/container";
import Gallery from "@/components/gallery/gallery";
import Info from "@/components/info";
import SuggestList from "@/components/sugessted-products";


interface ProductPageProps {
    params: {
        productId: string
    }
}

const ProductPage = async ({ params }: ProductPageProps) => {


    const product = await getProduct(Number(params.productId));
    const suggestedProducts = await getCategories(product.category);

    return (
        <div className="flex flex-col  bg-[#111827]">
            <Container>
                <div className=" px-4 py-10 sm:px-6 lg:px-8 mt-16">
                    <div className=" bg-white lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Gallery */}
                        <Gallery images={product.images} />
                        <div className=" mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <Info data={product} />
                        </div>
                    </div>
                    <hr className="my-10" />
                    <SuggestList title="Related Items" data={suggestedProducts.products} />
                </div>
            </Container>

        </div>
    )
};

export default ProductPage;
