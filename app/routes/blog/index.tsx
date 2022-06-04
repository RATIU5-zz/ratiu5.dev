import * as React from "react";

export default function BlogPage() {
	return (
		<article>
			<section>
				<div>
					<h1>recent posts</h1>
					<div>
						<ul>
							<li>
								<a href="/blog/post1">
									<div>
										<div>
											<img src="post-image.png" alt="post image alt text" />
										</div>
										<div>
											<h2>post title</h2>
											{/* Summary of the post */}
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Nobis, perspiciatis inventore? Obcaecati tempore in
												magnam libero ratione dicta voluptas facere. Tenetur
												iure officiis itaque nisi necessitatibus fugit quisquam
												vero. Obcaecati.
											</p>
										</div>
									</div>
								</a>
							</li>
							<li>
								<a href="/blog/post2">
									<div>
										<div>
											<img src="post-image.png" alt="post image alt text" />
										</div>
										<div>
											<h2>post title</h2>
											{/* Summary of the post */}
											<p>
												Lorem ipsum dolor sit amet consectetur adipisicing elit.
												Nobis, perspiciatis inventore? Obcaecati tempore in
												magnam libero ratione dicta voluptas facere. Tenetur
												iure officiis itaque nisi necessitatibus fugit quisquam
												vero. Obcaecati.
											</p>
										</div>
									</div>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</section>
		</article>
	);
}

export function ErrorBoundary({ error }: { error: Error }) {
	return (
		<div>
			<h1>Oh no!</h1>
			<p>{error.message}</p>
		</div>
	);
}
