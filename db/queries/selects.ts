import { eq } from "drizzle-orm";
import { db } from "../../src/lib/tursoDb";
import { clientsTable, type SelectClients } from "../schema";

export const getClients = async (): Promise<
	Array<{
		id: number;
		name: string;
		age: number;
		isActive: boolean;
	}>
> => {
	return db.select().from(clientsTable);
};

export const getClientsById = async (
	id: SelectClients["id"],
): Promise<
	Array<{
		id: number;
		name: string;
		age: number;
		isActive: boolean;
	}>
> => {
	return db.select().from(clientsTable).where(eq(clientsTable.id, id));
};
