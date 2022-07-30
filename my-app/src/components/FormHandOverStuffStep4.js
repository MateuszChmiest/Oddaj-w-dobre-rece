import React, {useContext} from 'react'
import { multiStepContext } from './FormStepContext';

const FormHandOverStuffStep4 = () => {

  const { setCurrentStep, currentStep } = useContext(multiStepContext);
  
  return (
    <section className='handOverStep'>
    <div className='handOverStep__container'>
      <div className='handOverStep__number'>Krok {currentStep}/4</div>
      <div className='handOverStep__check'>
        <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
        <div className='handOverStep__choice'>
          <label for='options' className='handOverStep__label'>
            Liczba worków to:
          </label>
        </div>
      </div>
      <div className="handOverStep__buttons">
        <button type='button' className='handOverStep__button' onClick={() => setCurrentStep((prevStep) => prevStep - 1)}>
          Wstecz
        </button>
        <button type='button' className='handOverStep__button' onClick={() => setCurrentStep((prevStep) => prevStep + 1)}>
          Dalej
        </button>
      </div>
    </div>
  </section>
  )
}

export default FormHandOverStuffStep4