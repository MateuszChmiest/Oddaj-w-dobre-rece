import React, { useContext, useState } from "react";
import { multiStepContext } from "./FormStepContext";

const FormHandOverStuffStep4 = () => {
	const { setCurrentStep, currentStep, setUserData, userData } =
		useContext(multiStepContext);

		const [street, setStreet] = useState(userData.street);
		const [city, setCity] = useState(userData.city);
		const [postCode, setPostCode] = useState(userData.postCode);
		const [phone, setPhone] = useState(userData.phone);
		const [date, setDate] = useState(userData.date);
		const [time, setTime] = useState(userData.time);
		const [comment, setComment] = useState(userData.comment);

	const handleNext = () => {
		if (!street || !city || !postCode || !phone || !date || !time) {
			return alert("Musisz uzupełnić wszystkie pola!")
		}
		setCurrentStep((prevStep) => prevStep + 1);
		setUserData((prevData) => ({
			...prevData,
			street: street,
			city: city,
			postCode: postCode,
			phone: phone,
			date: date,
			time: time,
			comment: comment
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
									onChange={(e) => setStreet(e.target.value)}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='city'>Miasto</label>
								<input
									type='text'
									name='city'
									className='handOverStep__addressInput'
									defaultValue={userData.city}
									onChange={(e) => setCity(e.target.value)}
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
									placeholder="12-345"
									className='handOverStep__addressInput'
									defaultValue={userData.postCode}
									onChange={(e) => setPostCode(e.target.value)}
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
									placeholder="123 456 789"
									className='handOverStep__addressInput'
									defaultValue={userData.phone}
									onChange={(e) => setPhone(e.target.value)}
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
									onChange={(e) => setDate(e.target.value)}
								/>
							</div>
							<div class='handOverStep__addressLabel'>
								<label for='time'>Godzina</label>
								<input
									type='time'
									name='time'
									className='handOverStep__addressInput'
									defaultValue={userData.time}
									onChange={(e) => setTime(e.target.value)}
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
									onChange={(e) => setComment(e.target.value)}
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
