import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NavSignUp from "./components/NavSignUp";
import Login from "./components/SignIn";
import Register from "./components/SignUp";
import Logout from "./components/Logout";
import FormHandOverStuff from "./components/FormHandOverStuff";
import { fire, signup, login, logout, useAuth } from "./services/firebase";
import FormStepContext from "./components/FormStepContext";

const App = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [repeatPassword, setRepeatPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");
	const [loading, setLoading] = useState(false);

	//* Function to SignUp
	async function handleSignUp(e) {
		try {
			const newUser = await signup(email, password);
			const user = newUser.user;
			// await addDoc(collection(db, "users"), {
			// 	UID: user.uid,
			// 	email,
			// 	authProvider: "local",
			// });
		} catch (err) {
			alert(err);
			clearInputs();
		}
	}

	//* Function to SignIn
	async function handleSignIn() {
		try {
			await login(email, password);
		} catch (err) {
			alert("Nieprawidłowy email lub hasło");
			clearInputs();
		}
	}

	//* Function to Logout
	async function handleLogout() {
		clearInputs();
		try {
			logout();
		} catch {
			alert("Error");
		}
	}

	//* Functions clear
	function clearInputs() {
		setEmail("");
		setPassword("");
		setRepeatPassword("");
	}

	function clearErrors() {
		setEmailError("");
		setPasswordError("");
	}

	const currentUser = useAuth();

	//* validation

	const validateLogin = (e) => {
		const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
		e.preventDefault();
		setLoading(true);
		clearErrors();
		if (!email) {
			 setEmailError("To pole nie moze być puste!");
		} else if (!reg.test(email)) {
			 setEmailError("Email jest nieprawidłowy");
		}
		if (password.length < 6) {
			return setPasswordError("Hasło jest za krótkie");
		} 

		setLoading(false);
		handleSignIn();
	};

	const validateRegister = (e) => {
		const reg = /^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i;
		e.preventDefault();
		setLoading(true);
		clearErrors();
		if (!email) {
			 setEmailError("To pole nie moze być puste!");
		} else if (!reg.test(email)) {
			 setEmailError("Email jest nieprawidłowy");
		}
		if (password.length < 6) {
			return setPasswordError("Hasło jest za krótkie");
		} else if (password !== repeatPassword) {
			return setPasswordError("Hasła nie są takie same");
		}

		setLoading(false);
		handleSignUp();
	};

	return (
		<FormStepContext>
		<Router>
			<div className='nav'>
				<NavSignUp handleLogout={handleLogout} />
				<Nav />
			</div>
			<Routes>
				<Route path='/' element={<Home currentUser={currentUser} />} />
				<Route
					path='/logowanie'
					element={
						<Login
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							validateLogin={validateLogin}
							loading={loading}
							emailError={emailError}
							passwordError={passwordError}
							clearErrors={clearErrors}
							clearInputs={clearInputs}
							currentUser={currentUser}
						/>
					}
				/>
				<Route
					path='/rejestracja'
					element={
						<Register
							email={email}
							setEmail={setEmail}
							password={password}
							setPassword={setPassword}
							repeatPassword={repeatPassword}
							setRepeatPassword={setRepeatPassword}
							loading={loading}
							emailError={emailError}
							passwordError={passwordError}
							validateRegister={validateRegister}
							clearErrors={clearErrors}
							clearInputs={clearInputs}
							currentUser={currentUser}
						/>
					}
				/>
				<Route path="/wylogowano" element={<Logout/>}/>
				<Route path="/oddaj-rzeczy" element={<FormHandOverStuff/>}/>
			</Routes>
		</Router>
		</FormStepContext>
	);
};

export default App;
