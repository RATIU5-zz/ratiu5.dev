import type { MetaFunction } from "@remix-run/deno";
import * as React from "react";
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";

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
