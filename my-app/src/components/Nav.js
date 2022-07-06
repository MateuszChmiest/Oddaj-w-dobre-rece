import React from "react";

const Nav = () => {

    const toggleBurger = () => {
        const burger = document.querySelector('.nav__burger');
        const menu = document.querySelector('.nav__elements')
        menu.classList.toggle('nav--active')
        burger.classList.toggle('burger--active');
    }

	return (
		<div className='nav__container'>
			<button className='nav__burger' onClick={toggleBurger}>
				<span className='line line1'></span>
				<span className='line line2'></span>
				<span className='line line3'></span>
			</button>
			<div className='nav__elements'>
				<a className='nav__element'>Start</a>
				<a className='nav__element'>O co chodzi?</a>
				<a className='nav__element'>O nas</a>
				<a className='nav__element'>Fundacja i organizacje</a>
				<a className='nav__element'>Kontakt</a>
			</div>
		</div>
	);
};

export default Nav;
