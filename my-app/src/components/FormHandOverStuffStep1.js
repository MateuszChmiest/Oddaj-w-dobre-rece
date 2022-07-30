import React, { useContext, useState } from "react";
import { multiStepContext } from "./FormStepContext";

const FormHandOverStuffStep1 = () => {
	const { setCurrentStep, currentStep, setUserData, userData } = useContext(multiStepContext);
	const [selectedThing, setSelectedThing] = useState(userData.things);

	const things = [
		"ubrania, które nadają się do ponownego użycia",
		"ubrania, do wyrzucenia",
		"zabawki",
		"ksiażki",
		"inne",
	];

	const handleChange = ({ target }) => {
		if (selectedThing.includes(target.name)) {
			setSelectedThing((prev) => prev.filter((el) => el !== target.name));
			return;
		}
		setSelectedThing(target.name);
	};

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
		setUserData((prevData) => ({
			...prevData, 
			things: selectedThing,
		}))
	}

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok {currentStep}/4</div>
				<div className='handOverStep__check'>
					<h1>Zaznacz co chcesz oddać:</h1>
					{things.map((thing, index) => {
						return (
							<div className='handOverStep__choice' key={index}>
								<input
									type='radio'
									id={index}
									name={thing}
									checked={selectedThing.includes(thing)}
									onChange={handleChange}
									className='handOverStep__input'></input>

								<label for={index} className='handOverStep__label'>
									{thing}
								</label>
							</div>
						);
					})}
				</div>
				<button
					type='button'
					className='handOverStep__button'
					onClick={handleNext}>
					Dalej
				</button>
			</div>
		</section>
	);
};

export default FormHandOverStuffStep1;
