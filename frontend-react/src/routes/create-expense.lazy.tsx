import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/create-expense")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="w-[350px] m-2 p-2 shadow-md shadow-blue-500 rounded-xl mx-auto">
      <div className="border-b-2 border-blue-100 flex flex-col items-center gap-2">
        <h1 className="text-xl">Create Expenses</h1>
      </div>
      <form className="flex flex-col justify-center pt-3 gap-2">
        <div className="flex justify-between items-center">
          <label className="w-[5rem] font-semibold">Title</label>
          <input
            type="text"
            id="title"
            className="border border-blue-100 rounded-lg flex-1 p-1"
          />
        </div>
        <div className="flex justify-between items-center">
          <label className="w-[5rem] font-semibold">Amount</label>
          <input
            type="number"
            id="amount"
            className="border border-blue-100 rounded-lg flex-1 p-1"
          />
        </div>
        <button className="shadow-md shadow-blue-300 rounded-xl bg-blue-100">
          Submit
        </button>
      </form>
    </div>
  );
}
