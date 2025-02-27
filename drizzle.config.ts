import { config } from "dotenv";
import { defineConfig, type Config } from "drizzle-kit";
config({ path: ".env" });

if (!process.env.PG_URL) {
  console.error("Error. PG_URL not defined in .env");
  process.exit(-1);
}

export default defineConfig({
  schema: "./server/db/schema/*",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.PG_URL,
  },
}) satisfies Config;
