import { createFileRoute, Outlet } from "@tanstack/react-router";
import { userQueryOptions } from "@/lib/api";

const Login = () => {
  return (
    <div>
      Please login{" "}
      <a href="/api/login" className="underline">
        here
      </a>
      !
    </div>
  );
};

const component = () => {
  const { user } = Route.useRouteContext();
  if (!user) {
    return <Login />;
  }

  return <Outlet />;
};

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ context: { queryClient } }) => {
    try {
      const data = await queryClient.fetchQuery(userQueryOptions);
      return data;
    } catch (e) {
      return { user: null };
    }
  },
  component,
});
