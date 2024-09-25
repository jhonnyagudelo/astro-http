import { db } from "../../src/lib/tursoDb";
import { clientsTable, type InsertClients } from "../schema";

export const createClients = async (data: InsertClients) => {
	await db.insert(clientsTable).values(data);
};
