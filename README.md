# Bun Example 1

- run

  - `bun run dev` in the `server` directory
  - `bun run dev` in the `frontend-directory` directory
  - open `http://localhost:5173/` in a web browser

- Use vscode `thunder client` for post requests

# Code History

The code in this repository is based of the following:

- https://hono.dev/docs/getting-started/bun
- hot reload code
  - https://stackoverflow.com/questions/76427355/how-to-enable-hot-reloading-with-bun-in-a-react-application
  - https://dev.to/yutakusuno/hono-simple-messaging-app-using-bun-and-websocket-mnk

# Creation History

```bash
mkdir bun-ex1
cd bun-ex1
bun init
bun install zod
```

React Frontend creation.

```bash
bun create vite@latest
cd frontend-react
# add tailwind 4.0 and followed the instruction on tailwinds site for vite.
bun install tailwindcss @tailwindcss/postcss postcss
```

Below tried and failed to use shad/cn because tailwind 4.0 added to
this project was just released last week and it does not support shad/cn yet.

```bash
bun add class-variance-authority
bun add clsx
bun add tailwind-merge
bun add @radix-ui/react-slot
# copy code for utils.ts to lib and button.tsx to components/ui
```

# Notes

## FLY.io

- `fly auth login`
- `fly launch`
  - create a Dockerfile and image for the pwd
  - start machine on fly.io and provides a url
- `fly deploy` create a new image and runs it on fly.io
- `fly apps list|destroy` to list and remove app

## Docker

| Command                         | Details           |
| ------------------------------- | ----------------- |
| docker build -t bun-ex1 .       | build the bun-ex1 |
| docker run -p 3000:3000 bun-ex1 | run docker image  |

| Size  | Details                     |
| ----- | --------------------------- |
| 711MB | Fly.io machine fs size      |
| 187MB | Initial Fly.io Docker image |
