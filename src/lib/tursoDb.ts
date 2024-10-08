import { config } from "dotenv";
import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";
config({ path: ".env" }); // or .env.local

export const turso = createClient({
	url: import.meta.env.TURSO_DB_URL,
	authToken: import.meta.env.TURSO_DB_AUTH_TOKEN,
});

export const db = drizzle(turso);
