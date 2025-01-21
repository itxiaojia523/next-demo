import { headers } from "next/headers";
import { NextRequest } from "next/server";

//如果放在page同级，会覆盖page的路由
export async function GET(request: NextRequest) {
  // 方法1
  // const requestHeader = new Headers(request.headers);
  // 方法2
  const headerLists = await headers();
  const requestHeader = headerLists.get("Authorization");
  return new Response("<h1>Hello World!</h1>", {
    headers: {
      "Content-Type": "text/html",
    },
    status: 200,
  });
}
