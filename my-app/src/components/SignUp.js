import React from "react";
import { useNavigate } from "react-router";

const SignUp = (props) => {
	const {
		email,
		setEmail,
		password,
		setPassword,
    repeatPassword,
    setRepeatPassword,
		validateLogin,
		loading,
		emailError,
		passwordError,
    validateRegister,
    clearErrors,
    clearInputs,
	currentUser
	} = props;
	const navigate = useNavigate();

	if (currentUser) {
		navigate("/");
	  }

	return (
		<section className='signUp'>
			<div className='signUp__container'>
				<h1>Zarejestruj się</h1>
				<div className='signUp__decoration'></div>
				<form onSubmit={validateRegister}>
					<div className='signUp__form'>
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
						<label>
							<br />
							Powtórz hasło
							<br />
							<input
								type='password'
								value={repeatPassword}
								onChange={(e) => setRepeatPassword(e.target.value)}
							/>
              <div id='error'>{passwordError}</div>
						</label>
					</div>
					<div className='signUp__buttons'>
						<button
							type='button'
							className='signUp__btn'
							onClick={() => {
                navigate("/logowanie");
                clearErrors();
                clearInputs();
              }}>
							Zaloguj się
						</button>
						<button type='submit' className='signUp__btn'>
							Załóż konto
						</button>
					</div>
				</form>
			</div>
		</section>
	);
};

export default SignUp;
