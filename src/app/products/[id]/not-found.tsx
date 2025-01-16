"use client";
//404页面是接受不到params的
//使用usePathname
import { usePathname } from "next/navigation";

// 跟page layout等一样，可以在自身文件夹下自定义404页面
export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];

  return (
    <div>
      <h2>Review Not Found for product {productId}</h2>
    </div>
  );
}
