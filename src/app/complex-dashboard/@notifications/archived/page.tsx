// parallel routes 使用了slot的概念

import { Card } from "@/app/components/card";
import Link from "next/link";

// @开头命名，可以使得该文件夹下的page变成layout的slot
export default function Archived() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link href="/complex-dashboard">Default</Link>
    </Card>
  );
}
