/*
 * app内的文件夹名即路径名
 * 必须命名为page.tsx或page.js
 * 默认暴露
 */
"use client";
import { useRouter } from "next/navigation";
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
