import { createLazyFileRoute, useNavigate } from "@tanstack/react-router";
import { useForm } from "@tanstack/react-form";
import { api } from "../lib/api";

export const Route = createLazyFileRoute("/create-expense")({
  component: RouteComponent,
});

function RouteComponent() {
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      title: "",
      amount: 0,
    },
    onSubmit: async ({ value }) => {
      const result = await api.expenses.$post({ json: value });
      if (!result.ok) {
        throw new Error("server error");
      }
      navigate({ to: "/expenses" });
    },
  });

  return (
    <div className="w-[350px] m-2 p-2 shadow-md shadow-blue-500 rounded-xl mx-auto">
      <div className="border-b-2 border-blue-100 flex flex-col items-center gap-2">
        <h1 className="text-xl">Create Expenses</h1>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
        className="flex flex-col justify-center pt-3 gap-2"
      >
        <form.Field
          name="title"
          children={(field) => (
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor={field.name} className="w-[5rem] font-semibold">
                  Title
                </label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="text"
                  onChange={(e) => field.handleChange(e.target.value)}
                  className="border border-blue-100 rounded-lg flex-1 p-1"
                />
              </div>
              {field.state.meta.errors ? (
                <em>{field.state.meta.errors}</em>
              ) : null}
            </div>
          )}
        />
        <form.Field
          name="amount"
          children={(field) => (
            <div>
              <div className="flex justify-between items-center">
                <label htmlFor={field.name} className="w-[5rem] font-semibold">
                  Amount
                </label>
                <input
                  name={field.name}
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  type="number"
                  onChange={(e) =>
                    field.handleChange(Number(e.target.value) || 0)
                  }
                  className="border border-blue-100 rounded-lg flex-1 p-1"
                />
              </div>
              {field.state.meta.errors ? (
                <em>{field.state.meta.errors}</em>
              ) : null}
            </div>
          )}
        />
        <form.Subscribe
          selector={(state) => [state.canSubmit, state.isSubmitting]}
          children={([canSubmit, isSubmitting]) => (
            <button
              type="submit"
              disabled={!canSubmit}
              className="shadow-md shadow-blue-300 rounded-xl bg-blue-100"
            >
              {isSubmitting ? "..." : "Submit"}
            </button>
          )}
        />
      </form>
    </div>
  );
}
