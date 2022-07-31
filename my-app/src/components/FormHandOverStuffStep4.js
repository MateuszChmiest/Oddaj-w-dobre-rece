import React, { useContext } from "react";
import { multiStepContext } from "./FormStepContext";

const FormHandOverStuffStep4 = () => {
	const { setCurrentStep, currentStep, setUserData, userData } =
		useContext(multiStepContext);

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
		setUserData((prevData) => ({
			...prevData,
		}));
	};

	const handleBack = () => {
		setCurrentStep((prevStep) => prevStep - 1);
		setUserData((prevData) => ({
			...prevData,
		}));
	};

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__number'>Krok {currentStep}/4</div>
				<div className='handOverStep__check'>
					<h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
					<div className='handOverStep__address'>
						<div className='handOverStep__address--data'>
							<h2>Adres odbioru:</h2>
							<div class='handOverStep__addressLabel'>
								<label for='street'>Ulica</label>
								<input
									type='text'
									name='street'
									className='handOverStep__addressInput'
									defaultValue={userData.street}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='city'>Miasto</label>
								<input
									type='text'
									name='city'
									className='handOverStep__addressInput'
									defaultValue={userData.city}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='postcode'>
									Kod <br />
									pocztowy
								</label>
								<input
									type='text'
									name='postcode'
									className='handOverStep__addressInput'
									defaultValue={userData.postCode}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='phone'>
									Numer <br />
									telefonu
								</label>
								<input
									type='text'
									name='phone'
									className='handOverStep__addressInput'
									defaultValue={userData.phone}
								/>
							</div>
						</div>
						<div className='handOverStep__address--data'>
							<h2>Termin odbioru:</h2>
							<div class='handOverStep__addressLabel'>
								<label for='date'>Data</label>
								<input
									type='date'
									name='date'
									className='handOverStep__addressInput'
									defaultValue={userData.date}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='time'>Godzina</label>
								<input
									type='time'
									name='time'
									className='handOverStep__addressInput'
									defaultValue={userData.time}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='comment'>
									Uwagi
									<br /> dla kuriera
								</label>
								<textarea
									className='handOverStep__addressText'
									name='comment'
									defaultValue={userData.comment}
								/>
							</div>
						</div>
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

export default FormHandOverStuffStep4;
