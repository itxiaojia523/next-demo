import { auth, currentUser } from "@clerk/nextjs/server";

export default async function ComplexDashboardPage() {
  const authObj = await auth();
  const userObj = await currentUser();
  console.log(authObj, userObj);
  return <h1>Complex dashboard</h1>;
}
