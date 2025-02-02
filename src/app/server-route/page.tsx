import { serverSideFuction } from "../utils/server-util";

export default function ServerRoute() {
  const result = serverSideFuction();
  return (
    <>
      <h1>ServerRoute {result}</h1>
    </>
  );
}
