import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./routes/expenses";
import { rootRoute } from "./routes/root";

const app = new Hono();

app.use(logger());

app.get("/test", (c) => c.json({ message: "test" }));

app.route("/api/expenses", expenseRoute);
app.route("/", rootRoute);

export default app;
