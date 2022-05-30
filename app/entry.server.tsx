import type { EntryContext } from "@remix-run/deno";
import { RemixServer } from "https://esm.sh/@remix-run/react@1.5.1";
import * as React from "https://esm.sh/react@18.1.0";
import { renderToString } from "https://esm.sh/react-dom@18.1.0/server";

export default function handleRequest(
	request: Request,
	responseStatusCode: number,
	responseHeaders: Headers,
	remixContext: typeof EntryContext,
) {
	const markup = renderToString(<RemixServer context={remixContext} url={request.url} />);

	responseHeaders.set("Content-Type", "text/html");

	return new Response("<!DOCTYPE html>" + markup, {
		status: responseStatusCode,
		headers: responseHeaders,
	});
}
