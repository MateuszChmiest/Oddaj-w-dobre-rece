import React from "react";
import { Link as LinkScroll } from "react-scroll";
import { useNavigate } from "react-router";

const Nav = () => {

	const toggleBurger = () => {
		const burger = document.querySelector(".nav__burger");
		const menu = document.querySelector(".nav__elements");
		menu.classList.toggle("nav--active");
		burger.classList.toggle("burger--active");
	};

	const navigate = useNavigate();

	return (
		<div className='nav__container'>
			<button className='nav__burger' onClick={toggleBurger}>
				<span className='line line1'></span>
				<span className='line line2'></span>
				<span className='line line3'></span>
			</button>
			<div className='nav__elements'>
				<LinkScroll
					onClick={() => {
						navigate("/")  
						toggleBurger()
					}}
					className='nav__element'
					to='HomeHeader'
					spy={true}
					smooth={true}
					duration={500}>
					Start
				</LinkScroll>
				<LinkScroll
					onClick={toggleBurger}
					className='nav__element'
					to='HomeSimpleSteps'
					spy={true}
					smooth={true}
					duration={500}>
					O co chodzi?
				</LinkScroll>
				<LinkScroll
					onClick={toggleBurger}
					className='nav__element'
					to="HomeAboutUs"
					spy={true}
					smooth={true}
					duration={500}>
					O nas
				</LinkScroll>
				<LinkScroll
					onClick={toggleBurger}
					className='nav__element'
					spy={true}
					smooth={true}
					duration={500}>
					Fundacja i organizacje
				</LinkScroll>
				<LinkScroll
					onClick={toggleBurger}
					className='nav__element'
					spy={true}
					smooth={true}
					duration={500}>
					Kontakt
				</LinkScroll>
			</div>
		</div>
	);
};

export default Nav;
