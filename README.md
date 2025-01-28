# Bun Example 1

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
