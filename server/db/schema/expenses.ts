import * as t from "drizzle-orm/pg-core";

export const expenses = t.pgTable(
  "expenses",
  {
    id: t.serial("id").primaryKey(),
    userId: t.text("user_id").notNull(),
    title: t.text("title").notNull(),
    amount: t.numeric("amount", { precision: 12, scale: 2 }),
    createdAt: t.timestamp("created_at").notNull().defaultNow(),
  },
  (expenses) => [t.index("user_id").on(expenses.userId)]
);
