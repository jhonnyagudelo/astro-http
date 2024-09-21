import type { APIRoute } from "astro"
import { Clients, db } from "astro:db"
export const prerender = false


export const GET: APIRoute = async ({ params, request }) => {

  const users = await db.select().from(Clients)

  if (!users) {
    return new Response(JSON.stringify({ msg: `not found` }), {
      status: 404,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  return new Response(JSON.stringify(users), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const POST: APIRoute = async ({ params, request }) => {
  try {
    const { id, ...body } = await request.json()
    const { lastInsertRowid } = await db.insert(Clients).values(body)
    return new Response(JSON.stringify({
      id: +lastInsertRowid!?.toString(),
      ...body
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    console.error(error)
    return new Response(JSON.stringify({ message: 'No se creo' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}
