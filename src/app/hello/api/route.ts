//如果放在page同级，会覆盖page的路由
export async function GET() {
  return new Response("Hello World!", { status: 200 });
}
