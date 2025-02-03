import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";
import { Submit } from "../components/submit";

export default function AddProductPage() {
  async function createProduct(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const price = formData.get("price") as string;
    const description = formData.get("description") as string;
    await addProduct(title, parseInt(price), description);
    redirect("/products");
  }
  return (
    <form className="p-4 space-y-4 max-w-96" action={createProduct}>
      <label className="text-black">
        Title
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="title"
        ></input>
      </label>
      <label className="text-black">
        Price
        <input
          type="number"
          className="block w-full p-2 text-black border rounded"
          name="price"
        ></input>
      </label>
      <label className="text-black">
        Description
        <input
          type="text"
          className="block w-full p-2 text-black border rounded"
          name="description"
        ></input>
      </label>
      <Submit></Submit>
    </form>
  );
}
