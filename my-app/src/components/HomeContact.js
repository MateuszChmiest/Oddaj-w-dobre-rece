import React, { useState } from "react";

const HomeContact = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [errorName, setErrorName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [success, setSuccess] = useState("");

	const sendForm = async (e) => {
		try {
			let resp = await fetch(
				`https://fer-api.coderslab.pl/v1/portfolio/contact`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ name, email, message }),
				}
			);
			resp = await resp.json();
			console.log(resp);
		} catch (err) {
			console.log('err');
		}
	};

	const clearValidate = () => {
		setErrorEmail("");
		setErrorMessage("");
		setErrorName("");
	};

	const clearInputs = () => {
		setName("");
		setEmail("");
		setMessage("");
	};

	const validateContact = (e) => {
		e.preventDefault();
		const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;

		setSuccess("");
		clearValidate();

		if (!name) {
			setErrorName("To pole nie może być puste!");
		}
		if (!email) {
			setErrorEmail("To pole nie może być puste!");
		} else if (!reg.test(email)) {
			setErrorEmail("Podany email jest nieprawidłowy!");
		}
		if (message.length < 120) {
			return setErrorMessage("Wiadomość musi mieć conajmniej 120 znaków!");
		}

		clearInputs();
		sendForm();
		setSuccess("Wiadomość została wysłana! Wkrótce się skontaktujemy.");
	};

	return (
		<section className='homeContact'>
			<div className='homeContact__background'></div>
			<div className='homeContact__contact'>
				<h2>Skontaktuj się z nami</h2>
				<div className='decoration'></div>
				<p id='success'>{success}</p>
				<form className='homeContact__form' onSubmit={validateContact}>
					<div className='homeContact__inputs'>
						<div className='homeContact__inputs--input'>
							<label for='name'>Wpisz swoje imię</label>
							<input
								type='text'
								id='name'
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<p>{errorName}</p>
						</div>
						<div className='homeContact__inputs--input'>
							<label for='email'>Wpisz swój email</label>
							<input
								type='email'
								id='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<p>{errorEmail}</p>
						</div>
					</div>
					<div className='homeContact__textarea'>
						<label for='message'>Wpisz swoją wiadomość</label>
						<textarea
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}></textarea>
						<p>{errorMessage}</p>
					</div>

					<button type='submit' className='homeContact__form--btn btn'>
						Wyślij
					</button>
				</form>
			</div>
			<footer className='homeContact__footer'>
				<p className='homeContact__footer--copy'>
					Copyright by Coders Lab &copy;
				</p>
				<div className='homeContact__footer--icons'>
					<div className='homeContact__icon'></div>
					<div className='homeContact__icon'></div>
				</div>
			</footer>
		</section>
	);
};

export default HomeContact;
