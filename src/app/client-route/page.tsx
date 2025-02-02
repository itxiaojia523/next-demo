"use client";

import { serverSideFuction } from "../utils/server-util";

export default function ClientRoute() {
  const result = serverSideFuction();
  return (
    <>
      <h1>ClientRoute {result}</h1>
    </>
  );
}
