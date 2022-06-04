import * as React from "react";

export default function Index() {
	return (
		<>
			<article>
				<section>
					<div>
						<div>
							<img src="" alt="profile image" />
						</div>
						<div>
							<h1>RATIU5</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
								placeat qui mollitia quas pariatur accusamus, consequuntur
								facere omnis error eum. Vero nulla iure ratione, quibusdam sequi
								pariatur alias ullam nemo.
							</p>
						</div>
					</div>
				</section>
				<section>
					<div>
						<h2>featured work</h2>
						<ul>
							<li>
								<div>
									<a href="#">
										{/* Link to blog post */}
										<h3>project 1</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Quis dolor nihil ex officiis quasi, fugiat minima a ea nemo
										blanditiis? Aspernatur maxime suscipit dignissimos
										voluptate, harum tenetur incidunt? Ipsam, odio!
									</p>
									<nav>
										<ul>
											<li>
												{/* Live link if applicable */}
												<a href="#">live ^</a>
											</li>
											<li>
												{/* Source link if applicable */}
												<a href="#">github ^</a>
											</li>
										</ul>
									</nav>
								</div>
							</li>
							<li>
								<div>
									<a href="#">
										{/* Link to blog post */}
										<h3>project 1</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Quis dolor nihil ex officiis quasi, fugiat minima a ea nemo
										blanditiis? Aspernatur maxime suscipit dignissimos
										voluptate, harum tenetur incidunt? Ipsam, odio!
									</p>
									<nav>
										<ul>
											<li>
												{/* Live link if applicable */}
												<a href="#">live ^</a>
											</li>
											<li>
												{/* Source link if applicable */}
												<a href="#">github ^</a>
											</li>
										</ul>
									</nav>
								</div>
							</li>
							<li>
								<div>
									<a href="#">
										{/* Link to blog post */}
										<h3>project 1</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Quis dolor nihil ex officiis quasi, fugiat minima a ea nemo
										blanditiis? Aspernatur maxime suscipit dignissimos
										voluptate, harum tenetur incidunt? Ipsam, odio!
									</p>
									<nav>
										<ul>
											<li>
												{/* Live link if applicable */}
												<a href="#">live ^</a>
											</li>
											<li>
												{/* Source link if applicable */}
												<a href="#">github ^</a>
											</li>
										</ul>
									</nav>
								</div>
							</li>
							<li>
								<div>
									<a href="#">
										{/* Link to blog post */}
										<h3>project 1</h3>
									</a>
									<p>
										Lorem ipsum dolor sit amet consectetur, adipisicing elit.
										Quis dolor nihil ex officiis quasi, fugiat minima a ea nemo
										blanditiis? Aspernatur maxime suscipit dignissimos
										voluptate, harum tenetur incidunt? Ipsam, odio!
									</p>
									<nav>
										<ul>
											<li>
												{/* Live link if applicable */}
												<a href="#">live ^</a>
											</li>
											<li>
												{/* Source link if applicable */}
												<a href="#">github ^</a>
											</li>
										</ul>
									</nav>
								</div>
							</li>
						</ul>
					</div>
				</section>
			</article>
		</>
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
