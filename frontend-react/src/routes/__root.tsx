import * as React from "react";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { type QueryClient } from "@tanstack/react-query";
// import { TanStackRouterDevtools } from "@tanstack/router-devtools";

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <div className="p-2 flex gap-2">
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{" "}
        <Link to="/expenses" className="[&.active]:font-bold">
          Expenses
        </Link>{" "}
        <Link to="/create-expense" className="[&.active]:font-bold">
          Create Expense
        </Link>{" "}
        <Link to="/about" className="[&.active]:font-bold">
          About
        </Link>
        <Link to="/profile" className="[&.active]:font-bold">
          Profile
        </Link>
      </div>
      <hr className="h-px bg-blue-700 border-0" />
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </React.Fragment>
  );
}
