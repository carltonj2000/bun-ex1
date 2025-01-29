import { Hono } from "hono";
import { logger } from "hono/logger";
import { expenseRoute } from "./routes/expenses";
import { authRoute } from "./routes/auth";
// import { rootRoute } from "./routes/root";
import { serveStatic } from "hono/bun";

const app = new Hono();

app.use(logger());

const apiRoutes = app
  .basePath("/api")
  .route("/expenses", expenseRoute)
  .route("/", authRoute);
export type ApiRoutes = typeof apiRoutes;

app.use("*", serveStatic({ root: "./frontend-react/dist" }));
app.get("*", serveStatic({ path: "./frontend-react/dist/index.html" }));

// app.get("/test", (c) => c.json({ message: "test" }));

// app.route("/", rootRoute);

export default app;
