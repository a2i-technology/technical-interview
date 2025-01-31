import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './lib/db/schema.ts',
  dialect: 'sqlite',
  dbCredentials: {
    url: "file:db/local.db",
  },
});