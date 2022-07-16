import React from "react";

const FormHandOverStuffHeader = () => {
	return (
		<section className='handOver'>
			<div className='handOver__background'></div>
			<div className='handOver__steps'>
				<div className='handOver__steps--title'>
					<h1>
						Oddaj rzeczy, których już nie chcesz
						<br /> POTRZEBUJĄCYM
					</h1>
					<div className='decoration'></div>
					<h2>Wystarczą 4 proste kroki:</h2>
				</div>
				<div className='handOver__box'>
					<div className='handOver__step'>
						<div className='handOver__step--rectangle'></div>
						<p className='handOver__step--number'>1</p>
						<p className='handOver__step--info'>
							Wybierz <br />
							rzeczy
						</p>
					</div>
					<div className='handOver__step'>
						<div className='handOver__step--rectangle'></div>
						<p className='handOver__step--number'>2</p>
						<p className='handOver__step--info'>
							Spakuj je <br />w worki
						</p>
					</div>
					<div className='handOver__step'>
						<p className='handOver__step--number'>3</p>
						<div className='handOver__step--rectangle'></div>
						<p className='handOver__step--info'>
							Wybierz <br />
							fundacje
						</p>
					</div>
					<div className='handOver__step'>
						<div className='handOver__step--rectangle'></div>
						<p className='handOver__step--number'>4</p>
						<p className='handOver__step--info'>
							Zamów <br />
							kuriera
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FormHandOverStuffHeader;
