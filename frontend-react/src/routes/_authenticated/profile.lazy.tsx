import { createLazyFileRoute } from "@tanstack/react-router";
import { userQueryOptions } from "@/lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/_authenticated/profile")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isPending, error, data } = useQuery(userQueryOptions);
  if (isPending) return <p>loading</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      <p>
        Welcome to {data.user.given_name} {data.user.family_name}'s profile
        page.
      </p>
      <a
        href="/api/logout"
        className="bg-slate-200 shadow-md rounded-lg py-1 px-2 hover:bg-slate-300"
      >
        Logout
      </a>
    </div>
  );
}
