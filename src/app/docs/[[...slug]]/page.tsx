//如果向让 http://localhost:3000/docs/ 也显示这个内容 [...slug]改成 [[...slug]]
export default async function Docs({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  // 这里ts没检查出来么 没提示要加? 不加会出问题
  if (slug?.length === 2) {
    return (
      <h1>
        Viewing docs for feature {slug[0]}and concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Viewing docs for feature {slug[0]}</h1>;
  }
  return <h1>Docs home page</h1>;
}
