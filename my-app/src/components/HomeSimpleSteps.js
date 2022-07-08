import React from "react";
import { useNavigate } from "react-router";
import tshirt from "../assets/Icon-1.svg";
import bag from "../assets/Icon-2.svg";
import search from "../assets/Icon-3.svg";
import arrow from "../assets/Icon-4.svg";

const HomeSimpleSteps = () => {

const navigate = useNavigate()

	return (
		<section className='simpleSteps'>
			<div className='simpleSteps__title'>
				<h1>Wystarczą 4 proste kroki</h1>
				<div className='simpleSteps__decoration' />
			</div>
			<div className='simpleSteps__background'>
				<div className='simpleSteps__steps'>
					<div className='simpleSteps__step'>
						<img src={tshirt} alt='tshirt' />
						<h3>Wybierz rzeczy</h3>
						<hr style={{ width: "60px" }} />
						<p>
							ubrania, zabawki,
							<br /> sprzęt i inne.
						</p>
					</div>
					<div className='simpleSteps__step'>
						<img src={bag} alt='bag' style={{marginBottom: "5px"}}/>
						<h3>Spakuj je</h3>
						<hr style={{ width: "60px" }} />
						<p>
							skorzystaj z <br />
							worków na śmieci
						</p>
					</div>
					<div className='simpleSteps__step'>
						<img src={search} alt='search' />
						<h3>
							Zdecyduj komu <br />
							chcesz pomóc
						</h3>
						<hr style={{ width: "60px" }} />
						<p>
							wybierz zaufane <br />
							miejsce
						</p>
					</div>
					<div className='simpleSteps__step'>
						<img src={arrow} alt='arrow' />
						<h3>Zamów kuriera</h3>
						<hr style={{ width: "60px" }} />
						<p>
							kurier przyjedzie <br />w dogodnym terminie
						</p>
					</div>
				</div>
			</div>
			<div className='simpleSteps__box'></div>
			<a className="simpleSteps__btn" onClick={() => navigate("/SignIn")}>ODDAJ <br/>RZECZY</a>
		</section>
	);
};

export default HomeSimpleSteps;
