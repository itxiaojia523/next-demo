// 文件夹第二层名字是 [id]
// 通过params获取到id
import { notFound, redirect } from "next/navigation";

import { Metadata } from "next";

type Props = {
  params: { id: string };
};

// 动态metadata
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  //通过notFound函数，转向404页面
  if (parseInt(id) > 1000) {
    // notFound();
    //重定向
    redirect("/products");
  } else if (parseInt(id) === 1000) {
    throw new Error("Error in productId");
  }
  return <div>Product: {id}</div>;
};

export default Product;
