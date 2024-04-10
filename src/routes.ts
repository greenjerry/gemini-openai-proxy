import { getRuntimeKey } from "./utils.ts"

export function hello(req: Request): Response {
  const origin = new URL(req.url).origin
  return new Response(`
    Hello World!
    `)
}
