import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const companies = sqliteTable("companies", {
  id: int().primaryKey({ autoIncrement: true }),
});