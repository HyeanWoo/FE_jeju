"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import type { ReactNode } from "react";
import { REACT_QUERY_GC_TIME, REACT_QUERY_STALE_TIME } from "../constants";

export default function ReactQueryProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: REACT_QUERY_STALE_TIME,
            gcTime: REACT_QUERY_GC_TIME,
            retry: 3,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
