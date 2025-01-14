// 文件夹第二层名字是 [id]
// 通过params获取到id
const Product = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return <div>Product: {id}</div>;
};

export default Product;
