"use client";
import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();

const MainLayout = props => {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        {props.children}
      </QueryClientProvider>
    </div>
  );
};

export default MainLayout;
