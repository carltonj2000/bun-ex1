import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { getUser } from "../kinde";

import { db } from "../db";
import { expenses as expensesTable } from "../db/schema/expenses";
import { desc, eq, sum } from "drizzle-orm";

import { createExpenseSchema } from "../sharedTypes";

export const expenseRoute = new Hono()
  .get("/", getUser, async (c) => {
    const expenses = await db
      .select()
      .from(expensesTable)
      .where(eq(expensesTable.userId, c.var.user.id))
      .orderBy(desc(expensesTable.createdAt));
    return c.json(expenses);
  })
  .post("/", getUser, zValidator("json", createExpenseSchema), async (c) => {
    const expense = c.req.valid("json");
    const newExpense = { ...expense, userId: c.var.user.id };
    const result = await db
      .insert(expensesTable)
      .values(newExpense)
      .returning();
    c.status(201);
    return c.json(result);
  })
  .get("/totalSpent", getUser, async (c) => {
    const result = await db
      .select({ total: sum(expensesTable.amount) })
      .from(expensesTable)
      .where(eq(expensesTable.userId, c.var.user.id))
      .limit(1)
      .then((res) => res[0]);
    return c.json(result);
  })
  .get("/:id{[0-9]+}", getUser, async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = await db
      .select()
      .from(expensesTable)
      .where(eq(expensesTable.id, id))
      .then((res) => res[0]);
    if (!expense) return c.notFound();
    return c.json(expense);
  })
  .delete("/:id{[0-9]+}", getUser, async (c) => {
    const id = Number.parseInt(c.req.param("id"));
    const expense = await db
      .delete(expensesTable)
      .where(eq(expensesTable.id, id))
      .returning()
      .then((res) => res[0]);
    if (!expense) return c.notFound();
    return c.json(expense);
  });
