import * as React from "react";

export default function Navbar() {
	return (
		<nav className="py-1">
			<div className="m-auto flex justify-between items-center max-w-2xl">
				<div className="bg-teal-500 ml-20">
					<img src="/images/logo.png" alt="RATIU5 logo" width={50} />
				</div>
				<ul className="flex mr-20 flex-wrap">
					<li className="mx-2">
						<a href="/">profile</a>
					</li>
					<li className="mx-2">
						<a href="/blog">blog</a>
					</li>
					<li className="mx-2">
						<a href="/contact">contact</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
