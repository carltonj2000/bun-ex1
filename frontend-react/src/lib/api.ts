import { queryOptions } from "@tanstack/react-query";
import { type ApiRoutes } from "../../../server/app.ts";
// import { type ApiRoutes } from "@server/app.ts";
import { hc } from "hono/client";

const client = hc<ApiRoutes>("/");

export const api = client.api;

const getCurrentUser = async () => {
  const res = await api.me.$get();
  if (!res.ok) {
    throw new Error("Server Error. Getting user.");
  }
  const json = await res.json();
  return json;
};

export const userQueryOptions = queryOptions({
  queryKey: ["getCurrentUser"],
  queryFn: getCurrentUser,
  staleTime: Infinity,
});
