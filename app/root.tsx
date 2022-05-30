import type { MetaFunction } from "@remix-run/deno";
import * as React from "https://esm.sh/react@18.1.0";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "https://esm.sh/@remix-run/react@1.5.1";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "RATIU5.dev",
	viewport: "width=device-width, initial-scale=1",
	description: "RATIU5.dev - My personal website",
});

export default function App() {
	return (
		<html lang="en">
			<head>
				<Meta />
				<Links />
			</head>
			<body>
				<Outlet />
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}
