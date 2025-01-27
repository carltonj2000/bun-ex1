import { Hono } from "hono";

type ExpenseT = {
  id: number;
  title: string;
  amount: number;
};

const exampleExpenses: ExpenseT[] = [
  { id: 1, title: "Groceries", amount: 10 },
  { id: 2, title: "Utilities", amount: 100 },
  { id: 3, title: "Rent", amount: 1000 },
];

export const expenseRoute = new Hono()
  .get("/", (c) => {
    return c.json({ exampleExpenses });
  })
  .post("/", (c) => {
    return c.json("");
  });
// .delete
// .put
