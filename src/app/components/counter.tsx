"use client";
// 默认是server component,所以无法使用useState useEffect
import React from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export const Counter = () => {
  // const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();
  console.log("counter component");
  const [count, setCount] = React.useState(0);

  //useAuth
  // if (!isLoaded || !userId) {
  //   return null;
  // }

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <button
      onClick={() => {
        setCount(count + 1);
      }}
    >
      Clicked {count} times
    </button>
  );
};
