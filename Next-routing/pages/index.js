import Link from "next/link";
import { useRouter } from "next/router";

function Home() {
    const router = useRouter()
    const handlleClick = () => {
        // router.push('/Product')
        router.replace('/Product')
    }
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/Blog">
        Blog
      </Link>
      <Link href="/Product">
        Product
      </Link>
      <Link href="/docs">
        Docs
          </Link>
          <button onClick={handlleClick}>Please Order</button>
    </div>
  );
}

export default Home;
