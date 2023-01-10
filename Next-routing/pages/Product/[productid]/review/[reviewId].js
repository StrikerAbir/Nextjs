import { useRouter } from "next/router";


function Review() {
    const router = useRouter()
    const { productid, reviewId } = router.query;
    return (
        <div>
            product {productid} with review {reviewId}
    </div>
)
}

export default Review;