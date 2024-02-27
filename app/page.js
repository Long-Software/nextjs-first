import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-7xl">Home page</h1>
      <Link href="/about">about page</Link>
    </div>
  );
}
