//如果向让 http://localhost:3000/docs/ 也显示这个内容 [...slug]改成 [[...slug]]

// 可以修改metadata
// 可以在page 或 layout定义，最终会合并一起，重复的时候page优先级更高
// 静态的metadata
// 注意不能再client component用
// export const metadata = {
//   title: "dcos",
//   description: "dcos",
// };

type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function Docs({ params }: Props) {
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
