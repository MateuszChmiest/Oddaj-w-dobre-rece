import React, { useState } from 'react'

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
      postCode: "",
      phone: "",
      date: "",
      time: "",
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