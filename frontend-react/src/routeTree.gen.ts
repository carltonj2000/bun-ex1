/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ExpensesLazyImport = createFileRoute('/expenses')()
const CreateExpenseLazyImport = createFileRoute('/create-expense')()
const AboutLazyImport = createFileRoute('/about')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ExpensesLazyRoute = ExpensesLazyImport.update({
  id: '/expenses',
  path: '/expenses',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/expenses.lazy').then((d) => d.Route))

const CreateExpenseLazyRoute = CreateExpenseLazyImport.update({
  id: '/create-expense',
  path: '/create-expense',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/create-expense.lazy').then((d) => d.Route),
)

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
    '/create-expense': {
      id: '/create-expense'
      path: '/create-expense'
      fullPath: '/create-expense'
      preLoaderRoute: typeof CreateExpenseLazyImport
      parentRoute: typeof rootRoute
    }
    '/expenses': {
      id: '/expenses'
      path: '/expenses'
      fullPath: '/expenses'
      preLoaderRoute: typeof ExpensesLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/create-expense': typeof CreateExpenseLazyRoute
  '/expenses': typeof ExpensesLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/create-expense': typeof CreateExpenseLazyRoute
  '/expenses': typeof ExpensesLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/about': typeof AboutLazyRoute
  '/create-expense': typeof CreateExpenseLazyRoute
  '/expenses': typeof ExpensesLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/about' | '/create-expense' | '/expenses'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/about' | '/create-expense' | '/expenses'
  id: '__root__' | '/' | '/about' | '/create-expense' | '/expenses'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  AboutLazyRoute: typeof AboutLazyRoute
  CreateExpenseLazyRoute: typeof CreateExpenseLazyRoute
  ExpensesLazyRoute: typeof ExpensesLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  CreateExpenseLazyRoute: CreateExpenseLazyRoute,
  ExpensesLazyRoute: ExpensesLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/create-expense",
        "/expenses"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/create-expense": {
      "filePath": "create-expense.lazy.tsx"
    },
    "/expenses": {
      "filePath": "expenses.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
