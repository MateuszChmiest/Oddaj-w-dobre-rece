import React, { useContext } from "react";
import { multiStepContext } from "./FormStepContext";
import tshirt from "../assets/Icon-1.svg";
import arrows from "../assets/Icon-4.svg";

const FormHandOverStuffSummary = () => {
	const { setCurrentStep, userData } = useContext(multiStepContext);

	const handleNext = () => {
		setCurrentStep((prevStep) => prevStep + 1);
	};

	const handleBack = () => {
		setCurrentStep((prevStep) => prevStep - 1);
	};

	return (
		<section className='handOverStep'>
			<div className='handOverStep__container'>
				<div className='handOverStep__check'>
					<h1>Podsumowanie twojej darowizny</h1>
					<div className='handOverStep__donate'>
						<h2>Oddajesz:</h2>
						<div className='handOverStep__donate--info'>
							<img src={tshirt} />
							<p>
								{userData.bags} worki, {userData.things},{" "}
								{userData.help.join(", ")}
							</p>
						</div>
						<div className='handOverStep__donate--info'>
							<img src={arrows} />
							<p>dla lokalizacji: {userData.location}</p>
						</div>
					</div>
					<div className='handOverStep__address'>
						<div className='handOverStep__address--data'>
							<h2>Adres odbioru:</h2>
							<div class='handOverStep__addressLabel'>
								<h3>Ulica:</h3>
								<p>{userData.street}</p>
							</div>
							<div class='handOverStep__addressLabel'>
								<h3>Miasto:</h3>
								<p>{userData.city}</p>
							</div>
							<div class='handOverStep__addressLabel'>
              <h3>Kod <br/>pocztowy:</h3>
								<p>{userData.postCode}</p>
							</div>
							<div class='handOverStep__addressLabel'>
              <h3>Numer <br/>telefonu:</h3>
								<p>{userData.phone}</p>
							</div>
						</div>
						<div className='handOverStep__address--data'>
							<h2>Termin odbioru:</h2>
							<div class='handOverStep__addressLabel'>
								<h3>Data:</h3>
								<p>{userData.date}</p>
							</div>
							<div class='handOverStep__addressLabel'>
								<h3>Godzina:</h3>
								<p>{userData.time}</p>
							</div>
							<div class='handOverStep__addressLabel'>
								<h3>
									Uwagi
									<br />
									dla kuriera:
								</h3>
								<p>{userData.comment}</p>
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
						Potwierdzam
					</button>
				</div>
			</div>
		</section>
	);
};

export default FormHandOverStuffSummary;
