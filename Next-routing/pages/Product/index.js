import Link from "next/link";


const index = ({productid=100}) => {
    return (
      <div>
        <Link href="/">Home</Link>
        <h1>Product page</h1>
        <Link href="/Product/1">
          <h2>Product 1</h2>
        </Link>
        <Link href="/Product/2">
          <h2>Product 2</h2>
        </Link>
        <Link href="/Product/3">
          <h2>Product 3</h2>
        </Link>
            <Link href={`/Product/${productid}`}>
                <h2>Product { productid}</h2>
        </Link>
      </div>
    );
};

export default index;