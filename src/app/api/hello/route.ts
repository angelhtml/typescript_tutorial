import { NextResponse } from "next/server"
import { content } from "../../../../types/content"

/*
export async function GET(req : any, res : res_data) {
  return NextResponse.json("./data.json")
}
*/


export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
  })
  const data : content = await res.json()
 
  return Response.json({ data })
}