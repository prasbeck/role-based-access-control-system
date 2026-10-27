# Role-Based Access Control API

A multi-tenant role-based access control (RBAC) service built with Fastify and TypeScript. Each **application** has its own users and roles, and routes are protected by permission scopes checked with `fastify-guard`.

## Features

- Create applications; each one is a separate tenant with its own users and roles
- Register users and log in (passwords hashed with Argon2, sessions as JWTs)
- Create roles with a set of permissions, and assign roles to users
- Permission-scoped routes, for example `roles:write` and `users:roles:write`
- Built-in system roles: `SUPER_ADMIN` and `APPLICATION_USER`
- Request and response validation with Zod (`fastify-zod`)
- PostgreSQL schema and migrations with Drizzle ORM; migrations run on startup

## Stack

TypeScript · Fastify · Drizzle ORM · PostgreSQL · Zod · Argon2 · JWT · Pino

## API

| Method | Route | Permission | Description |
|---|---|---|---|
| `POST` | `/api/applications` | none | Create an application |
| `GET` | `/api/applications` | none | List applications |
| `POST` | `/api/users` | none | Create a user in an application |
| `POST` | `/api/users/login` | none | Log in and receive a JWT |
| `POST` | `/api/users/roles` | `users:roles:write` | Assign a role to a user |
| `POST` | `/api/roles` | `roles:write` | Create a role |

Permissions are defined in [`src/config/permissions.ts`](src/config/permissions.ts).

A Thunder Client collection with example requests is in [`thunder-collection_UserAPI.json`](thunder-collection_UserAPI.json).

## Getting started

Requirements: Node.js, pnpm, and a PostgreSQL database.

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Create a `.env` file:

   ```env
   DATABASE_CONNECTION=postgres://user:password@localhost:5432/rbac
   PORT=3000
   HOST=0.0.0.0
   ```

3. Generate migrations (only after changing `src/db/schema.ts`):

   ```bash
   pnpm run migrate
   ```

4. Start the dev server. Migrations in `./migrations` are applied on startup.

   ```bash
   pnpm run dev
   ```

## Project structure

```
src/
  config/      env schema and permission list
  db/          Drizzle schema and connection
  modules/
    applications/  routes, controllers, services, schemas
    roles/
    users/
  utils/       server setup and logger
migrations/    generated SQL migrations
```
