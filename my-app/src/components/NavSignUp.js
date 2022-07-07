import React from "react";
import { useNavigate } from "react-router";

const NavSignUp = () => {
	const navigate = useNavigate();

	return (
		<div className='navSignUp'>
			<div className='navSignUp__button'>
				<a onClick={() => navigate("SignIn")}>Zaloguj</a>
			</div>
			<div className='navSignUp__button'>
				<a onClick={() => navigate("SignUp")}>Załóż konto</a>
			</div>
		</div>
	);
};

export default NavSignUp;
