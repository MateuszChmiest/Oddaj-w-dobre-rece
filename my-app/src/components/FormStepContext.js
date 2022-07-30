import React, { useState } from 'react'
import FormHandOverStuff from './FormHandOverStuff';

export const multiStepContext = React.createContext("");

export const FormStepContext = (props) => {
    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState({
      things: [],
      bags: '—— wybierz ——',
      location: '—— wybierz ——',
      help: [],
      organization: "",
      street: "",
      city: "",
      postalCode: "",
      phoneNumber: "",
      date: "",
      hour: "",
      comment: ""
    });
    const [finalData, setFinalData] = useState([]);

    console.log(userData)

  return (
    <div>
        <multiStepContext.Provider value={{currentStep, setCurrentStep, userData, setUserData, finalData, setFinalData}}>
            {props.children}
        </multiStepContext.Provider>
    </div>
  )
}

export default FormStepContext;