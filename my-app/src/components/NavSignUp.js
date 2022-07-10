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
						<a id="hiddenButton">Oddaj rzeczy</a>
					</div>
					<a id="currentUser">Cześć {currentUser.email}</a>
					<div className='navSignUp__button'>
						<a
							onClick={() => {
								handleLogout();
								navigate("/");
							}}>
							Wyloguj
						</a>
					</div>
				</>
			) : (
				<>
					<div className='navSignUp__button'>
						<a onClick={() => navigate("Login")}>Zaloguj</a>
					</div>
					<div className='navSignUp__button'>
						<a onClick={() => navigate("Register")}>Załóż konto</a>
					</div>
				</>
			)}
		</div>
	);
};

export default NavSignUp;
