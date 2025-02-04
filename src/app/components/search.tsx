import Form from "next/form";

export default function Search() {
  // 使用Form Component ?query=3 will be added to the URL
  return (
    <Form className="p-4 space-y-4 max-w-96" action="/products">
      <input
        className="block w-full p-2 text-black border rounded"
        name="query"
        placeholder="Search products"
      ></input>
      <button
        type="submit"
        className="block w-full p-2 text-white  rounded bg-blue-500 disabled:bg-gray-500"
      >
        Submit
      </button>
    </Form>
  );
}
