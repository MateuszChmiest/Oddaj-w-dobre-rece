import React from "react";
import tshirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import search from "../assets/Icon-3.svg";
import arrow from "../assets/Icon-4.svg";

const HomeSimpleSteps = () => {
	return (
		<section className='simpleSteps'>
			<div className='simpleSteps__tittle'>
				<h1>Wystarczą 4 proste kroki</h1>
				<div className='simpleSteps__decoration' />
			</div>
			<div className='simpleSteps__steps'>
				<div className='simpleSteps__step'>
          <img src={tshirt} alt="tshirt"/>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne.</p>
        </div>
				<div className='simpleSteps__step'>
          <img src={bag} alt="bag"/>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne.</p>
        </div>
				<div className='simpleSteps__step'>
          <img src={search} alt="search"/>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne.</p>
        </div>
				<div className='simpleSteps__step'>
          <img src={arrow} alt="arrow"/>
          <h3>Wybierz rzeczy</h3>
          <p>ubrania, zabawki, sprzęt i inne.</p>
        </div>
			</div>
			<div className='simpleSteps__btn'></div>
      <a>ODDAJ RZECZY</a>
		</section>
	);
};

export default HomeSimpleSteps;
