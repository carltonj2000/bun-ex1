import { createLazyFileRoute } from "@tanstack/react-router";
import { api } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/")({
  component: RouteComponent,
});

const getTotalSpent = async () => {
  const res = await api.expenses.totalSpent.$get();
  if (!res.ok) {
    throw new Error("Server Error. Getting total spent.");
  }
  const json = await res.json();
  return json;
};

function RouteComponent() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getTotalSpent"],
    queryFn: getTotalSpent,
  });

  if (error) return <p>Error Receiving Total Spent</p>;
  return (
    <div className="w-[350px] m-2 p-2 shadow-md shadow-blue-500 rounded-xl mx-auto">
      <div className="border-b-2 border-blue-100 flex flex-col items-center gap-2">
        <h1 className="text-xl">Total Spent</h1>
        <p>The total amount you've spent</p>
      </div>
      <div className="flex justify-center pt-3">
        <p className="text-center">
          {isPending ? "...retrieving total..." : `$${data.total}`}
        </p>
      </div>
    </div>
  );
}
