import Link from "next/link";

function Home() {
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
    </div>
  );
}

export default Home;
