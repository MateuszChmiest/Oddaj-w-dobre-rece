import React, { useState } from 'react'
import FormHandOverStuff from './FormHandOverStuff';

export const multiStepContext = React.createContext();

const FormStepContext = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState([]);
    const [finalData, setFinalData] = useState([]);

  return (
    <div>
        <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData}}>
            <FormHandOverStuff/>
        </multiStepContext.Provider>
    </div>
  )
}

export default FormStepContext;