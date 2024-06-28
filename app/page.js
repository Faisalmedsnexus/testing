import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Link href="/components/addproduct">Add Product</Link>
      <Link href="/components/products">Products List</Link>
    </main>
  );
}
