"use client";
// 默认是server component,所以无法使用useState useEffect
import React from "react";

export const Counter = () => {
  console.log("counter component");
  const [count, setCount] = React.useState(0);
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
