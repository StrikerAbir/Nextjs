import { useRouter } from "next/router";

function ProductDetails() {
    const router = useRouter();
    const productId = router.query.productid
    console.log(productId);
    return (
        <div>
            <h2>Product Details { productId }</h2>
        </div>
    )
}

export default ProductDetails