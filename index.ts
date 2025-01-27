import { parseArgs } from "util";
import { getFreePort } from "./getPort";
import app from "./app";

const { values: args } = parseArgs({
  args: Bun.argv,
  options: {
    browse: {
      type: "boolean",
    },
    freeport: {
      type: "boolean",
    },
  },
  allowPositionals: true,
});

const freePort = (await new Promise((resolve, reject) => {
  getFreePort(function (err: any, port: any) {
    if (err) reject(err);
    resolve(port);
  });
}).catch((err) => {
  console.error(err);
  process.exit(-1);
})) as string;

const port = args.freeport ? freePort : process.env.PORT || 3000;

Bun.serve({
  fetch: app.fetch,
  port,
});

const url = `http://localhost:${port}/test`;
const start =
  process.platform == "darwin"
    ? "open"
    : process.platform == "win32"
    ? "start"
    : "xdg-open";

if (args.browse) require("child_process").exec(start + " " + url);
