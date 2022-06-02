import type { MetaFunction } from "@remix-run/deno";
import * as React from "react";
import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from "@remix-run/react";
import Navbar from "./components/navbar/navbar.tsx";

export const meta: MetaFunction = () => ({
	charset: "utf-8",
	title: "RATIU5.dev",
	viewport: "width=device-width, initial-scale=1",
	description: "RATIU5.dev - My personal website",
});

export default function App() {
	return (
		<Document>
			<Layout>
				<Outlet />
			</Layout>
		</Document>
	);
}

function Document({
	children,
	title,
}: {
	children: React.ReactNode;
	title?: string;
}) {
	return (
		<html lang="en">
			<head>
				<title>{title || "RATIU5.dev"}</title>
				<Meta />
				<Links />
			</head>
			<body>
				{children}
				<ScrollRestoration />
				<Scripts />
				<LiveReload />
			</body>
		</html>
	);
}

function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<header>
				<Navbar />
			</header>
			<main>{children}</main>
			<footer>Footer</footer>
		</>
	);
}
