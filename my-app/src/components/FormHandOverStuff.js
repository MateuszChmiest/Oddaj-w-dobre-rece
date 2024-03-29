import React, { useContext, useState } from "react";
import FormHandOverStuffHeader from "./FormHandOverStuffHeader";
import FormHandOverStuffImportant from "./FormHandOverStuffImportant";
import FormHandOverStuffStep1 from "./FormHandOverStuffStep1";
import FormHandOverStuffStep2 from "./FormHandOverStuffStep2";
import FormHandOverStuffStep3 from "./FormHandOverStuffStep3";
import FormHandOverStuffStep4 from "./FormHandOverStuffStep4";
import FormHandOverStuffSummary from "./FormHandOverStuffSummary";
import FormHandOverStuffThankYou from "./FormHandOverStuffThankYou";
import FormStepContext, { multiStepContext } from "./FormStepContext";
import HomeContact from "./HomeContact";

const FormHandOverStuff = () => {
	const { currentStep } = useContext(multiStepContext);

	const showStep = (currentStep) => {
		switch (currentStep) {
			case 1:
				return <FormHandOverStuffStep1 />;
			case 2:
				return <FormHandOverStuffStep2 />;
			case 3:
				return <FormHandOverStuffStep3 />;
			case 4:
				return <FormHandOverStuffStep4 />;
			case 5:
				return <FormHandOverStuffSummary />;
			case 6:
				return <FormHandOverStuffThankYou />;
		}
	};

	return (
		<>
				<FormHandOverStuffHeader />
				<FormHandOverStuffImportant />
				{showStep(currentStep)}
				<HomeContact />
		</>
	);
};

export default FormHandOverStuff;
