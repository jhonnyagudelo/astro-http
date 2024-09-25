import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";
export const clientsTable = sqliteTable("clients", {
	id: integer("id").primaryKey(),
	name: text("name"),
	age: integer("age"),
	isActive: integer("id", { mode: "boolean" }),
});

export type InsertClients = typeof clientsTable.$inferInsert;
export type SelectClients = typeof clientsTable.$inferSelect;
