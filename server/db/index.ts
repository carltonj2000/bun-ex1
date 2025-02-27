// import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-serverless";
// import ws from "ws";

if (!process.env.PG_URL) {
  console.error("Error: No PG DB URL set!");
  process.exit(-1);
}

// neonConfig.webSocketConstructor = ws;
// const sql = neon(process.env.PG_URL);

export const db = drizzle(process.env.PG_URL);

// See https://neon.tech/docs/serverless/serverless-driver
// for more information
