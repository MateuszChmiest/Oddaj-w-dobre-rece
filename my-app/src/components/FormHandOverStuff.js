import React from "react";
import FormHandOverStuffHeader from "./FormHandOverStuffHeader";
import FormHandOverStuffImportant from "./FormHandOverStuffImportant";
import FormHandOverStuffStep1 from "./FormHandOverStuffStep1";
import FormHandOverStuffStep2 from "./FormHandOverStuffStep2";
import FormHandOverStuffStep3 from "./FormHandOverStuffStep3";
import HomeContact from "./HomeContact";

const FormHandOverStuff = () => {
	const showStep = (step) => {
		switch (step) {
			case 1:
				return <FormHandOverStuffStep1 />;
			case 2:
				return <FormHandOverStuffStep2 />;
			case 3:
				return <FormHandOverStuffStep3 />;
		}
	};

	return (
		<>
			<FormHandOverStuffHeader />
			<FormHandOverStuffImportant />
			{showStep(1)}
			<HomeContact />
		</>
	);
};

export default FormHandOverStuff;
