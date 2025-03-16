"use client";

import { useRouter } from "next/navigation";
import { startTransition } from "react";

const ErrorBoundary = ({ error, reset }) => {
  const router = useRouter();

  const reload = () => {
    startTransition(() => {
      router.refresh();
      reset();
    });
  };
  return (
    <div>
      <p>{error.message}</p>
      <button
        className="px-2 py-1 rounded-md border border-gray-300"
        onClick={() => reload()}
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorBoundary;
