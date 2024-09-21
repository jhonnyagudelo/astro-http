import { Clients, db } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Clients).values([
    { id: 1, name: "Kasim", age: 35, isActive: true },
    { id: 2, name: "Mina", age: 20, isActive: true },
    { id: 3, name: "Mimi", age: 25, isActive: false },
    { id: 4, name: "pepe", age: 19, isActive: true },
  ]);
}
