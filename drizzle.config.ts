import { defineConfig } from "drizzle-kit"
import { env } from "./src/config/env"
export default defineConfig({
  dialect: "postgresql", //  | "mysql"
  schema: "./src/db/schema.ts",
  out:"migrations"
})