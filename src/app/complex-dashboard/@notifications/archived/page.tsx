// parallel routes 使用了slot的概念

import { Card } from "@/app/components/card";
import Link from "next/link";

// @开头命名，可以使得该文件夹下的page变成layout的slot
export default function Archived() {
  return (
    <Card>
      <div>Archived Notifications</div>
      {/* 
      当点击了这个连接，只有Notification是matched route
      那么其他两个UnMatched routes会被如何处理呢

      1. 如果是通过UI进行Navigation的，保持之前的显示

      2. 如果是page reload的话
      它希望有一个default.tsx 在每一个 unmatched slot
       */}
      <Link href="/complex-dashboard">go to dashboard</Link>
    </Card>
  );
}
