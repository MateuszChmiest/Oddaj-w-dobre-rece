import React, { useState, useContext } from "react";
import { multiStepContext } from "./FormStepContext";

const FormHandOverStuffStep3 = () => {
	const { setCurrentStep, currentStep, setUserData, userData } =
		useContext(multiStepContext);

	const [selectedHelp, setSelectedHelp] = useState(userData.help);
	const [selectedLocation, setSelectedLocation] = useState(userData.location);
	const [organization, setOrganization] = useState(userData.organization);

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

	const handleNext = () => {
		if (selectedHelp.length === 0) {
			return alert("Musisz wybrać komu chcesz pomóc!");
		} 
		setCurrentStep((prevStep) => prevStep + 1);
		setUserData((prevData) => ({
			...prevData,
			location: selectedLocation,
			help: selectedHelp,
			organization: organization,
		}));
	};

	const handleBack = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok {currentStep}/4</div>
				<div className='handOverStep__check'>
					<h1>Lokalizacja:</h1>
					<div className='handOverStep__choice'>
						<select
							id='options'
							name='options'
							className='handOverStep__options'
							onChange={(e) => setSelectedLocation(e.target.value)}>
							<option>{userData.location}</option>
							<option value='Poznań'>Poznań</option>
							<option value='Warszawa'>Warszawa</option>
							<option value='Kraków'>Kraków</option>
							<option value='Wrocław'>Wrocław</option>
							<option value='Katowice'>Katowice</option>
						</select>
					</div>
					<div className='handOverStep__check'>
						<h2>Komu chcesz pomóc?</h2>
						<div className='handOverStep__choiceHelp'>
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
						<input
							type='text'
							className='handOverStep__text'
							value={organization}
							onChange={(e) => setOrganization(e.target.value)}></input>
					</div>
				</div>
				<div>
					<button
						type='button'
						className='handOverStep__button'
						onClick={handleBack}>
						Wstecz
					</button>
					<button
						type='button'
						className='handOverStep__button'
						onClick={handleNext}>
						Dalej
					</button>
				</div>
			</div>
		</section>
	);
};

export default FormHandOverStuffStep3;
