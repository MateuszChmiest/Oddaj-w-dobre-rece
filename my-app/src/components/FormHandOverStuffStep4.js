import React from 'react'

const FormHandOverStuffStep4 = () => {
  return (
    <section className='handOverStep'>
    <div className='handOverStep__container'>
      <div className='handOverStep__number'>Krok 4/4</div>
      <div className='handOverStep__check'>
        <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
        <div className='handOverStep__choice'>
          <label for='options' className='handOverStep__label'>
            Liczba worków to:
          </label>
        </div>
      </div>
      <div className="handOverStep__buttons">
        <button type='button' className='handOverStep__button'>
          Wstecz
        </button>
        <button type='button' className='handOverStep__button'>
          Dalej
        </button>
      </div>
    </div>
  </section>
  )
}

export default FormHandOverStuffStep4