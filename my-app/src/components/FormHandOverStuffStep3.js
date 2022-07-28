import React, { useState } from "react";

const FormHandOverStuffStep3 = () => {
	const [selectedHelp, setSelectedHelp] = useState("");

	const whoHelp = [
		"dzieciom",
		"samotnym matkom",
		"bezdomnym",
		"niepełnosprawnym",
		"osobom starszym",
	];

	const handleChangeHelp = ({ target }) => {
		if (selectedHelp.includes(target.value)) {
			setSelectedHelp((prev) => prev.filter((el) => el !== target.value));
			return;
		}
		setSelectedHelp((prev) => [...prev, target.value]);
	};

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok 3/4</div>
				<div className='handOverStep__check'>
					<h1>Lokalizacja:</h1>
					<div className='handOverStep__choice'>
						<select
							id='options'
							name='options'
							className='handOverStep__options'>
							<option
								class='step_item_firstOne'
								value='—— wybierz ——'
								disabled
								selected>
								—— wybierz ——
							</option>
							<option value='Poznań'>Poznań</option>
							<option value='Warszawa'>Warszawa</option>
							<option value='Kraków'>Kraków</option>
							<option value='Wrocław'>Wrocław</option>
							<option value='Katowice'>Katowice</option>
						</select>
					</div>
					<div className='handOverStep__check'>
						<h2>Zaznacz co chcesz oddać:</h2>
            <div className="handOverStep__choiceHelp">
						{whoHelp.map((item, index) => {
							return (
								<div className='handOverStep__help' key={index}>
									<input
										type='checkbox'
										id={index}
										value={item}
										checked={selectedHelp.includes(item)}
										onChange={handleChangeHelp}
										className='handOverStep__checkbox'></input>
									<label htmlFor={index} className='handOverStep__label'>
										{item}
									</label>
								</div>
							);
						})}
            </div>
					</div>
					<div className='handOverStep__organization'>
						<h2>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h2>
						<input type='text' className="handOverStep__text"></input>
					</div>
				</div>
				<div>
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

export default FormHandOverStuffStep3;
