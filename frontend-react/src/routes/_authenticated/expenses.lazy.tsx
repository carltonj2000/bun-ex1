import { createLazyFileRoute } from "@tanstack/react-router";
import { api } from "../../lib/api";
import { useQuery } from "@tanstack/react-query";

export const Route = createLazyFileRoute("/_authenticated/expenses")({
  component: RouteComponent,
});

const getExpenses = async () => {
  await new Promise((res) => setTimeout(res, 1000));
  const res = await api.expenses.$get();
  if (!res.ok) {
    throw new Error("Server Error. Getting expenses.");
  }
  const json = await res.json();
  return json;
};

function RouteComponent() {
  const { isPending, error, data } = useQuery({
    queryKey: ["getExpenses"],
    queryFn: getExpenses,
  });

  if (error) return <p>Error Receiving Total Spent</p>;
  return (
    <div className="w-[350px] m-2 p-2 shadow-md shadow-blue-500 rounded-xl mx-auto">
      <div className="border-b-2 border-blue-100 flex flex-col items-center gap-2">
        <h1 className="text-xl">Expenses</h1>
      </div>
      <div className="flex justify-center pt-3">
        {isPending ? (
          <p>...retrieving expense...</p>
        ) : (
          <div className="flex flex-col w-full">
            {data.expenses.map((e) => (
              <div key={e.id} className="flex justify-between">
                <span>{e.title}</span>
                <span>${e.amount}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
