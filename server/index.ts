import { serve } from "https://deno.land/std@0.141.0/http/server.ts";
import { createRequestHandlerWithStaticFiles } from "@remix-run/deno";
import * as build from "https://esm.sh/@remix-run/dev@1.5.1/server-build";

const remixHandler = createRequestHandlerWithStaticFiles({
	build,
	mode: Deno.env.get("NODE_ENV") || "development",
	getLoadContext: () => ({}),
});

const port = Number(Deno.env.get("PORT")) || 8000;
console.log(`Listening on http://localhost:${port}`);
serve(remixHandler, { port });
