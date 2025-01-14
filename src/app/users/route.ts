//安装插件thunder client : Lightweight Rest API Client for VS Code
// test api : http://localhost:3000/users
export const users = [
  { id: 1, name: "justin" },
  { id: 2, name: "tom" },
];
export async function GET() {
  return Response.json(users);
}
export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: user.name,
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
