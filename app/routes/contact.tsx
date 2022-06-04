import * as React from "react";

export default function ContactPage() {
	return (
		<>
			<section>
				<div>
					<div>
						<h1>contact</h1>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Explicabo veritatis laborum voluptatem laudantium porro iusto,
							modi provident, voluptate tenetur sapiente nemo reiciendis magni.
							Totam ex numquam quidem enim perspiciatis ipsum.
						</p>
					</div>
					<div>
						<form>
							<label>
								full name
								<input
									type="text"
									name="full_name"
									placeholder="first name"
									required
								/>
							</label>
							<label>
								email
								<input
									type="email"
									name="email_address"
									placeholder="email"
									required
								/>
							</label>
							<label>
								company
								<input
									type="text"
									name="company_rep"
									placeholder="company"
									required
								/>
							</label>
							<label>
								message
								<textarea name="message" placeholder="message"></textarea>
							</label>
							<button type="submit">let's chat</button>
						</form>
					</div>
				</div>
			</section>
		</>
	);
}
