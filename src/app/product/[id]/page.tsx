import type { Metadata } from "next";
import Nav from "@/components/nav";
import { getProductById } from "@/data/products";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { AddToCartButton } from "@/components/AddToCartButton";

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);

  return {
    title: product ? `${product.name} | Fashion Store` : "Product | Fashion Store",
    description: product?.description ?? "View the details of this product.",
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* <Nav /> */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <Link href="/" className="text-blue-600 hover:text-blue-800 transition-colors mb-8 inline-flex items-center gap-2 font-medium">
          <span>&larr;</span> Back to Products
        </Link>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-gray-100">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {product.category && (
              <span className="text-sm text-blue-600 font-semibold uppercase tracking-wider mb-3">
                {product.category}
              </span>
            )}
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{product.name}</h1>
            <p className="text-3xl text-gray-800 font-bold mb-6">
              ৳{product.price}
            </p>
            {product.description && (
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                {product.description}
              </p>
            )}
            <div className="mt-auto">
              <AddToCartButton
                product={product}
                className="w-full bg-black text-white px-8 py-4 rounded-xl hover:bg-gray-800 text-lg font-bold transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
