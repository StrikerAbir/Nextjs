import Link from 'next/link'
function Home() {
  return (
    <>
      <h1>Home Next js pre rendering</h1>
      <Link href="/users">
      Users</Link>
      <Link href="/posts">
      Posts</Link>
      <Link href="/news">
      News</Link>
      <Link href="/dashboard">
      Dashboard</Link>
    </>
  );
}

export default Home