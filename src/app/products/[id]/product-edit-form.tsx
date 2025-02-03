"use client";
import { useActionState } from "react";
import { editProduct, FormState } from "@/actions/products";
import { Product } from "../page";

export default function EditProductForm({ product }: { product: Product }) {
  const initialState: FormState = {
    errors: {},
  };
  const editProductWithId = editProduct.bind(null, product.id);
  const [state, formAction, isPending] = useActionState(
    editProductWithId,
    initialState
  );

  return (
    <form className="p-4 space-y-4 max-w-96" action={formAction}>
      <div>
        <label className="text-black">
          Title
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="title"
            defaultValue={product.title}
          ></input>
        </label>
        {state.errors.title && (
          <p className="text-red-500">{state.errors.title}</p>
        )}
      </div>
      <div>
        <label className="text-black">
          Price
          <input
            type="number"
            className="block w-full p-2 text-black border rounded"
            name="price"
            defaultValue={product.price}
          ></input>
        </label>
        {state.errors.price && (
          <p className="text-red-500">{state.errors.price}</p>
        )}
      </div>
      <div>
        <label className="text-black">
          Description
          <input
            type="text"
            className="block w-full p-2 text-black border rounded"
            name="description"
            defaultValue={product.description}
          ></input>
        </label>
        {state.errors.description && (
          <p className="text-red-500">{state.errors.description}</p>
        )}
      </div>
      {/* <Submit></Submit> option */}
      <button
        type="submit"
        className="block w-full p-2 text-white  rounded bg-blue-500 disabled:bg-gray-500"
        disabled={isPending}
      >
        Submit
      </button>
    </form>
  );
}
