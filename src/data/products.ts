export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Black Panjabi",
    price: 1499,
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&q=80&w=800",
    description: "Premium black panjabi for a classic and elegant look. Made with breathable cotton for maximum comfort throughout the day.",
    category: "Panjabi",
  },
  {
    id: 2,
    name: "Casual Shirt",
    price: 999,
    image: "https://images.unsplash.com/photo-1596755094514-f87e32f1b712?auto=format&fit=crop&q=80&w=800",
    description: "Comfortable and stylish casual shirt for everyday wear. Features a modern fit and durable stitching.",
    category: "Shirt",
  },
  {
    id: 3,
    name: "Denim Jeans",
    price: 1799,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&q=80&w=800",
    description: "Durable denim jeans with a modern fit. Versatile enough to pair with both casual and formal tops.",
    category: "Jeans",
  },
];

export function getProductById(id: string | number): Product | undefined {
  return products.find((p) => p.id === Number(id));
}
