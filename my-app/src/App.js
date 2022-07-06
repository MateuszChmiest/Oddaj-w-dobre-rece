import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import NavSignUp from "./components/NavSignUp";

const App = () => {
	return (
		<Router>
			<div className='nav'>
				<NavSignUp />
				<Nav />
			</div>
			<Routes>
				<Route path='/' element={<Home />} />
				{/* <Route path='/Login' element={<Login />} />
				<Route path='/Register' element={<Register />} /> */}
			</Routes>
		</Router>
	);
};

export default App;
