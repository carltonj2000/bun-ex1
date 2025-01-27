import { Hono } from "hono";
import { getFreePort } from "./getPort";

const app = new Hono();
app.get("/", (c) => c.text("Hono!"));

const port = await new Promise((resolve, reject) => {
  getFreePort(function (err: any, port: any) {
    if (err) reject(err);
    resolve(port);
  });
}).catch((err) => {
  console.error(err);
  process.exit(-1);
});

export default {
  port: port,
  fetch: app.fetch,
};

const url = `http://localhost:${port}`;
const start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";
require("child_process").exec(start + " " + url);
