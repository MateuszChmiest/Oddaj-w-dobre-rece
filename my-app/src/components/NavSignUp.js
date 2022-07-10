import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../services/firebase";


const NavSignUp = (props) => {
	const {handleLogout} = props;
	const navigate = useNavigate();
	const currentUser = useAuth();

	return (
		<div className='navSignUp'>
			{currentUser ? (
				<>
					<h1>Cześć {currentUser.email}</h1>
					<div className='navSignUp__button'>
						<a onClick={() => {
							handleLogout();
							navigate("/");
						}}>Wyloguj</a>
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
