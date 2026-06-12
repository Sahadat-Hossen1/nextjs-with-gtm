"use client"
import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { useEffect } from "react";
import { sendGAEvent } from "@next/third-parties/google";

export const metadata = {
  title: "Home | Fashion Store",
  description: "Discover the latest fashion trends on our home page.",
};

export default function HomePage() {
   useEffect(() => {
    sendGAEvent("event", "demo-event", { value: "demo" });
  }, []);
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-black text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Fashion Store</h1>
        <p className="mt-4 text-lg">
          Discover the latest fashion trends
        </p>
      </section>

      {/* Product Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group"
            >
              <Link href={`/product/${product.id}`} className="block overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={500}
                  className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>

              <div className="p-4 flex flex-col flex-grow">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-xl font-semibold group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-gray-600 mt-2 flex-grow">
                  ৳{product.price}
                </p>

                <button className="mt-4 bg-black text-white px-4 py-2 rounded hover:opacity-90 w-full">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}