"use client";
import { useActionState } from "react";
import { createProduct, FormState } from "@/actions/products";

export default function AddProductPage() {
  const initialState: FormState = {
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    createProduct,
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
