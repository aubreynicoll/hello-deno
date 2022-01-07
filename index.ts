import { serve } from "https://deno.land/std@0.120.0/http/server.ts";


const handler = (_req: Request): Response => {
  return new Response("Hello, Deno!");
}

await serve(handler);