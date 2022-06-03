import * as React from "react";

export default function Navbar() {
	return (
		<nav>
			<div>
				<img src="/images/logo.png" alt="RATIU5 logo" width={50} />
			</div>
			<ul>
				<li>
					<a href="/">profile</a>
				</li>
				<li>
					<a href="/blog">blog</a>
				</li>
				<li>
					<a href="/contact">contact</a>
				</li>
			</ul>
		</nav>
	);
}
