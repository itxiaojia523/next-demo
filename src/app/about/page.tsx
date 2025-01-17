import { Metadata } from "next";
import About from "./about";

// 注意不能再client component用 metadata
// 解决方案，page里移除use client
// 这边代码全部移动到about.tsx 再引入
export const metadata: Metadata = {
  title: {
    absolute: "About", //可以覆盖父组件的title，父组件的template都不生效，绝对是About的意思
  },
};
export default About;
