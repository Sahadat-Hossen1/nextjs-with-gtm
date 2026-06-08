import Link from "next/link";

export default function Nav() {
    return (
          <nav className="bg-black text-white px-6 py-4">
        <div className="flex gap-6">
          <Link
            href="/"
            className="bg-gray-800 px-4 py-2 rounded"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="bg-gray-800 px-4 py-2 rounded"
          >
            About
          </Link>

          <Link
            href="/product"
            className="bg-gray-800 px-4 py-2 rounded"
          >
            Product
          </Link>
        </div>
      </nav>
    );
}