import * as React from "react";

export default function Footer() {
	return (
		<div>
			<div>
				<div>Left Content</div>
				<div>
					<div>
						<h4>Pages</h4>
						<nav>
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
					</div>
					<div>
						<h4>Socials</h4>
						<nav>
							<ul>
								<li>
									<a href="#">GitHub</a>
								</li>
								<li>
									<a href="#">Twitter</a>
								</li>
								<li>
									<a href="#">LinkedIn</a>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
			<div>
				<p>Copyright &copy; RATIU5.dev 2022</p>
			</div>
		</div>
	);
}
