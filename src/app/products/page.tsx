import { removeProduct } from "@/actions/products";
import { getProducts } from "@/prisma-db";
import Link from "next/link";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string | null;
};
export default async function Products() {
  const products: Product[] = await getProducts();
  return (
    <>
      <ul className="space-y-4 p-4">
        {products.map((product) => (
          <li key={product.id} className="p-4 border border-gray-200 rounded">
            <h2 className="text-lg font-bold">
              <Link href={`/products/${product.id}`}> {product.title}</Link>
            </h2>
            <p className="text-sm">{product.description}</p>
            <p className="text-sm">${product.price}</p>
            <form action={removeProduct.bind(null, product.id)}>
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
