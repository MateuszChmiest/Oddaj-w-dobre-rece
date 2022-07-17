import React from "react";
import FormHandOverStuffHeader from "./FormHandOverStuffHeader";
import FormHandOverStuffImportant from "./FormHandOverStuffImportant";
import FormHandOverStuffStep1 from "./FormHandOverStuffStep1";
import FormHandOverStuffStep2 from "./FormHandOverStuffStep2";
import HomeContact from "./HomeContact";

const FormHandOverStuff = () => {
	return (
		<>
			<FormHandOverStuffHeader />
			<FormHandOverStuffImportant />
			<FormHandOverStuffStep2/>
			<HomeContact />
		</>
	);
};

export default FormHandOverStuff;
