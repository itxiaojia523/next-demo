// Handling Errors in Layouts , error boundry cannot catch errors in the layout.tsx file from the same segment
"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();
  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset(); // 只尝试re-render client side  所以要尝试重新发送请求或者说
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button onClick={reload}>Try again</button>
    </div>
  );
}
