import React from "react";

const HomeHeader = () => {
	return (
		<section className='homeHeader'>
			<div className='homeHeader__image'></div>
			<div className='homeHeader__intro'>
				<div className='homeHeader__text'>
					<h1>Zacznij Pomagać!</h1>
					<h1>Oddaj niechciane rzeczy w zaufane ręce</h1>
					<div className='homeHeader__decoration'></div>
					<div className='homeHeader__buttons'>
						<a className="homeHeader__btn">ODDAJ <br/>RZECZY</a>
						<a className="homeHeader__btn">ZORGANIZUJ <br/>ZBIÓRKĘ</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeHeader;
