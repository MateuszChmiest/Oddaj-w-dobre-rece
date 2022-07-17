import React from "react";

const FormHandOverStuffStep2 = () => {
	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok 2/4</div>
				<div className='handOverStep__check'>
					<h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
					<div className='handOverStep__choice'>
						<label for='options' className='handOverStep__label'>
							Liczba worków to:
						</label>
						<select id='options' name='options' className="handOverStep__options">
							<option
								class='step_item_firstOne'
								value='—— wybierz ——'
								disabled
								selected>
								—— wybierz ——
							</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>
				<div className="handOverStep__buttons">
					<button type='button' className='handOverStep__button'>
						Wstecz
					</button>
					<button type='button' className='handOverStep__button'>
						Dalej
					</button>
				</div>
			</div>
		</section>
	);
};

export default FormHandOverStuffStep2;
