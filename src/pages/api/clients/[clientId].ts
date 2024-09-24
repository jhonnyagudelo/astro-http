import type { APIRoute } from "astro";
import { Clients, db, eq } from "astro:db";
export const prerender = false



export const GET: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId
  const body = {
    method: 'GET',
    clientId
  }


  return new Response(JSON.stringify({
    body
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}



export const PUT: APIRoute = async ({ params, request }) => {
  const clientId = params.clientId
  const body = {
    method: 'PUT',
    clientId
  }



  return new Response(JSON.stringify({
    ...body
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export const PATCH: APIRoute = async ({ params, request }) => {
  try {
    const clientId = params.clientId ?? '';
    const { id, ...body } = await request.json()
    const result = await db.update(Clients).set(body)
      .where(eq(Clients.id, +clientId))

    const updatedClient = await db.select().from(Clients).where(eq(Clients.id, +clientId))

    return new Response(JSON.stringify({ updatedClient }), {
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

export const DELETE: APIRoute = async ({ params, request }) => {
  try {
    const clientId = params.clientId ?? '';
    await db.delete(Clients)
      .where(eq(Clients.id, +clientId))


    return new Response(JSON.stringify({ msg: 'Se elimino' }), {
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
