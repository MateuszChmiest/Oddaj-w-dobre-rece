import React, { useContext, useState } from "react";
import { multiStepContext } from "./FormStepContext";

const FormHandOverStuffStep2 = () => {
	const { setCurrentStep, currentStep, setUserData, userData } = useContext(multiStepContext);
	const [selectedBags, setSelectedBags] = useState(userData.bags);

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
		setUserData((prevData) => ({
			...prevData, 
			bags: selectedBags,
		}))
	}

	const handleBack = () => {
		setCurrentStep((prevStep) => prevStep - 1);
		setUserData((prevData) => ({
			...prevData, 
			bags: selectedBags,
		}))
	}

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok {currentStep}/4</div>
				<div className='handOverStep__check'>
					<h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
					<div className='handOverStep__choice'>
						<label for='options' className='handOverStep__label'>
							Liczba worków to:
						</label>
						<select
							id='options'
							name='options'
							className='handOverStep__options'
							onChange={(e) => setSelectedBags(e.target.value)}>
							<option>
								{userData.bags}
							</option>
							<option value='1'>1</option>
							<option value='2'>2</option>
							<option value='3'>3</option>
							<option value='4'>4</option>
							<option value='5'>5</option>
						</select>
					</div>
				</div>
				<div className='handOverStep__buttons'>
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

export default FormHandOverStuffStep2;
