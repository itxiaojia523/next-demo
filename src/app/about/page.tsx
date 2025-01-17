/*
 * app内的文件夹名即路径名
 * 必须命名为page.tsx或page.js
 * 默认暴露
 */
"use client";
import { useRouter } from "next/navigation";

// 注意不能再client component用 metadata
// export const metadata = {
//   title: "dcos",
//   description: "dcos",
// };
// 解决方案，page里移除use client
// 这边代码全部移动到about.tsx 再引入
const About = () => {
  const router = useRouter();
  return (
    <div>
      <h1>About</h1>
      <button
        onClick={() => {
          router.push("/");
        }}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go home
      </button>
    </div>
  );
};

export default About;
