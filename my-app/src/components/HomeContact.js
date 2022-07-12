import React from "react";

const HomeContact = () => {
	return (
		<section className='homeContact'>
			<div className='homeContact__background'></div>
			<div className='homeContact__contact'>
				<h2>Skontaktuj się z nami</h2>
				<div className='decoration'></div>
				<form className='homeContact__form'>
					<div className='homeContact__inputs'>
						<div className='homeContact__inputs--input'>
							<label for='name'>Wpisz swoje imię</label>
							<input type='text' id='name' />
						</div>
						<div className='homeContact__inputs--input'>
							<label for='email'>Wpisz swój email</label>
							<input type='email' id='email' />
						</div>
					</div>
					<div className='homeContact__textarea'>
						<label for='message'>Wpisz swoją wiadomość</label>
						<textarea id='message'></textarea>
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
