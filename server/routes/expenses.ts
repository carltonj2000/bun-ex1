import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";
import { z } from "zod";

const exampleExpenses: ExpenseT[] = [
  { id: 1, title: "Groceries", amount: 10 },
  { id: 2, title: "Utilities", amount: 100 },
  { id: 3, title: "Rent", amount: 1000 },
];

const expenseSchema = z.object({
  id: z.number().int().positive().min(1),
  title: z.string().min(3).max(100),
  amount: z.number().int().positive(),
});
const createPostSchema = expenseSchema.omit({ id: true });

type ExpenseT = z.infer<typeof expenseSchema>;

export const expenseRoute = new Hono()
  .get("/", (c) => {
    return c.json({ exampleExpenses });
  })
  .post("/", zValidator("json", createPostSchema), async (c) => {
    const expense = await c.req.valid("json");
    const id = exampleExpenses.length + 1;
    exampleExpenses.push({ id, ...expense });
    c.status(201);
    return c.json(exampleExpenses);
  })
  .get("/total-spent", (c) => {
    const total = exampleExpenses.reduce((a, e) => a + e.amount, 0);
    return c.json({ total });
  })
  .get("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = exampleExpenses.find((e) => e.id === id);
    if (!expense) return c.notFound;
    return c.json(expense);
  })
  .delete("/:id{[0-9]+}", (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const index = exampleExpenses.findIndex((e) => e.id === id);
    if (index === -1) return c.notFound;
    const deletedExpense = exampleExpenses.splice(index, 1)[0];
    return c.json(deletedExpense);
  });
