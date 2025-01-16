// 文件夹第二层名字是 [id]
// 通过params获取到id
import { notFound } from "next/navigation";
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  //通过notFound函数，转向404页面
  if (parseInt(id) > 1000) {
    notFound();
  }
  return <div>Product: {id}</div>;
};

export default Product;
