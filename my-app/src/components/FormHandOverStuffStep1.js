import React from "react";

const FormHandOverStuffStep1 = () => {
	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok 1/4</div>
				<div className='handOverStep__check'>
					<h1>Zaznacz co chcesz oddać:</h1>
					<div className='handOverStep__choice'>
						<input type='radio' id='thing1' className="handOverStep__input"></input>
        
						<label for='thing1' className="handOverStep__label">
							ubrania, które nadają się do ponownego użycia
						</label>
					</div>
					<div className='handOverStep__choice'>
						<input type='radio' id='thing1' className="handOverStep__input"></input>
                        
						<label for='thing2' className="handOverStep__label">ubrania, do wyrzucenia</label>
					</div>
					<div className='handOverStep__choice'>
						<input type='radio' id='thing1' className="handOverStep__input"></input>
                        
						<label for='thing3' className="handOverStep__label">zabawki</label>
					</div>
					<div className='handOverStep__choice'>
						<input type='radio' id='thing1' className="handOverStep__input"></input>
                        
						<label for='thing4' className="handOverStep__label">ksiażki</label>
					</div>
					<div className='handOverStep__choice'>
						<input type='radio' id='thing1' className="handOverStep__input"></input>
                        
						<label for='thing5' className="handOverStep__label">inne</label>
					</div>
				</div>
				<button type='button' className='handOverStep__button'>
					Dalej
				</button>
			</div>
		</section>
	);
};

export default FormHandOverStuffStep1;
