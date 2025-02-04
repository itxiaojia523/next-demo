"use client";
import { useOptimistic } from "react";
import { removeProduct } from "@/actions/products";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
export default function ProductDetail({ products }: { products: Product[] }) {
  const [opmisticProducts, setOpmisticProducts] = useOptimistic(
    products,
    (currentProducts, productId) => {
      return currentProducts.filter((product) => product.id !== productId);
    }
  );
  const removeProductById = async (productId: number) => {
    await removeProduct(productId);
    setOpmisticProducts(productId);
  };
  return (
    <>
      <ul className="space-y-4 p-4">
        {opmisticProducts.map((product) => (
          <li key={product.id} className="p-4 border border-gray-200 rounded">
            <h2 className="text-lg font-bold">
              <Link href={`/products/${product.id}`}> {product.title}</Link>
            </h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">${product.price}</p>
            <form action={removeProductById.bind(null, product.id)}>
              <button
                type="submit"
                className="px-4 py-2 mt-4  text-white  rounded-md bg-red-500 disabled:bg-gray-500"
              >
                Delete
              </button>
            </form>
          </li>
        ))}
      </ul>
    </>
  );
}
