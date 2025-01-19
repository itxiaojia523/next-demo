// parallel routes 使用了slot的概念

import { Card } from "@/app/components/card";

// @开头命名，可以使得该文件夹下的page变成layout的slot
export default function Notifications() {
  return <Card>Notifications</Card>;
}
