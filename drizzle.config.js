import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
    out: "./drizzle",
    dbCredentials: {
      url:'postgresql://neondb_owner:npg_4JOsMr9cmgHZ@ep-bitter-fire-a4idjiro-pooler.us-east-1.aws.neon.tech/INTELLIMOCK_DB?sslmode=require',
  }
});
