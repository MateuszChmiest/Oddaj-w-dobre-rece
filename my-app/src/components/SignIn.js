import React from "react";
import { useNavigate } from "react-router";

const SignIn = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
		validateLogin,
		loading,
		emailError,
		passwordError,
    clearErrors,
    clearInputs,
    currentUser,
	} = props;

	const navigate = useNavigate();
  
  if (currentUser) {
    navigate("/");
  }

	return (
		<section className='signIn'>
			<div className='signIn__container'>
				<h1>Zaloguj się</h1>
				<div className='signIn__decoration'></div>
				<form onSubmit={validateLogin}>
					<div className='signIn__form'>
						<label>
							Email <br />
							<input
								type='email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
							<div id='error'>{emailError}</div>
						</label>
						<label>
							<br />
							Hasło
							<br />
							<input
								type='password'
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
							<div id='error'>{passwordError}</div>
						</label>
					</div>
					<div className='signIn__buttons'>
						<button
							type='button'
							className='signIn__btn'
							onClick={() => {
                navigate("/rejestracja");
                clearErrors();
                clearInputs();
              }}>
							Załóż konto
						</button>
						<button type='submit' className='signIn__btn' disabled={loading}>
							Zaloguj się
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SignIn;
