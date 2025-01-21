export const dynamic = "force-static"; //dev环境不会生效
// npm run build  npm run start
export const revalidate = 10; // 10秒后重新获取数据

// 每次获取都是最新的，说明没有缓存
export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
