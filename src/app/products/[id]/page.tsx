// 文件夹第二层名字是 [id]
// 通过params获取到id
import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

// dynamic params 争对预渲染以外的情况，true的时候，就是正常的按需生成；false的话404
// 如果是电商选true 如果是blog可能就false
export const dynamicParams = false;
// prerender 
export async function generateStaticParams(){
 return [{id:"1"},{id:"2"},{id:"3"}]
}
// 如果访问4，他会在runtime时生成文件，还是static render
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

  const getRandomInt = (count: number) => {
    return Math.floor(Math.random() * count);
  };
  const random = getRandomInt(2);
  if (random === 1) {
    // throw new Error("Error loading products");
  }
  //通过notFound函数，转向404页面
  if (parseInt(id) > 1000) {
    // notFound();
    //重定向
    redirect("/products");
  }

  return <div>Product: {id}</div>;
};

export default Product;
