import Link from "next/link";
import Image from "next/image";
import { products } from "@/data/products";
import { AddToCartButton } from "@/components/AddToCartButton";

export const metadata = {
  title: "Products | Fashion Store",
  description: "Browse all of our available fashion products.",
};

export default function ProductsPage() {

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">All Products</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden flex flex-col group transition-shadow duration-300 border border-gray-100"
            >
              <Link href={`/product/${product.id}`} className="block overflow-hidden relative">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {product.category && (
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-gray-800 shadow-sm">
                    {product.category}
                  </span>
                )}
              </Link>

              <div className="p-6 flex flex-col flex-grow">
                <Link href={`/product/${product.id}`}>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">
                    {product.name}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">
                    ৳{product.price}
                  </span>
                  <AddToCartButton
                    product={product}
                    className="bg-black text-white px-5 py-2.5 rounded-lg hover:bg-gray-800 font-semibold transition-colors shadow-sm active:scale-95"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
