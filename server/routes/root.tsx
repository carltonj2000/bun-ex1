import { Hono } from "hono";
import type { FC } from "hono/jsx";
import { html, raw } from "hono/html";

export const rootRoute = new Hono().get("/", (c) => {
  return c.html(<Top messages={["hi there 5"]} />);
});

const iffe = raw`(() => {
  const socketUrl = "ws://localhost:3000/ws";
  let socket = new WebSocket(socketUrl);
  socket.addEventListener("open", () => {
    // console.log('ws open');
  });
  socket.addEventListener("close", () => {
    // console.log('ws close');
    const interAttemptTimeoutMilliseconds = 100;
    const maxDisconnectedTimeMilliseconds = 1000;
    const maxAttempts = Math.round(
      maxDisconnectedTimeMilliseconds / interAttemptTimeoutMilliseconds,
    );
    let attempts = 0;
    const reloadIfCanConnect = () => {
      attempts++;
      if (attempts > maxAttempts) {
        console.error("Could not reconnect to dev server.");
        return;
      }
      socket = new WebSocket(socketUrl);
      socket.addEventListener("error", () => {
        setTimeout(reloadIfCanConnect, interAttemptTimeoutMilliseconds);
      });
      socket.addEventListener("open", () => {
        location.reload();
      });
    };
    reloadIfCanConnect();
  });
})();`;

const Layout: FC = (props) => {
  return (
    <html>
      <body>{props.children}</body>
      <script>{iffe}</script>
    </html>
  );
};

const Top: FC<{ messages: string[] }> = (props: { messages: string[] }) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {props.messages.map((message) => {
          return <li>{message}!!</li>;
        })}
      </ul>
    </Layout>
  );
};
