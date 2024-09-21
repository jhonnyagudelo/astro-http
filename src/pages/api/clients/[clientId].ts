import type { APIRoute } from "astro";
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
  const clientId = params.clientId
  const body = {
    method: 'PATCH',
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

export const DELETE: APIRoute = async ({ params, request }) => {

  const clientId = params.clientId
  const body = {
    method: 'PATCH',
    clientId
  }
  return new Response(JSON.stringify({
    method: 'DELETE',
    body
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })

}
