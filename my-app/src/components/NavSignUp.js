import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../services/firebase";

const NavSignUp = (props) => {
	const { handleLogout } = props;
	const navigate = useNavigate();
	const currentUser = useAuth();

	return (
		<div className='navSignUp'>
			{currentUser ? (
				<>
					<div className='navSignUp__button'>
						<a id="hiddenButton" onClick={() => navigate("/oddaj-rzeczy")}>Oddaj rzeczy</a>
					</div>
					<a id="currentUser">Cześć {currentUser.email}</a>
					<div className='navSignUp__button'>
						<a
							onClick={() => {
								handleLogout();
								navigate("/wylogowano");
							}}>
							Wyloguj
						</a>
					</div>
				</>
			) : (
				<>
					<div className='navSignUp__button'>
						<a onClick={() => navigate("/logowanie")}>Zaloguj</a>
					</div>
					<div className='navSignUp__button'>
						<a onClick={() => navigate("/rejestracja")}>Załóż konto</a>
					</div>
				</>
			)}
		</div>
	);
};

export default NavSignUp;
