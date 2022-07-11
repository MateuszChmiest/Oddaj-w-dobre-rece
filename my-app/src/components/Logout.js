import React from 'react'
import { useNavigate } from 'react-router'

const Logout = () => {

    const navigate = useNavigate();

  return (
    <div className='logout'>
        <div className='logout__container'>
            <h2>Wylogowanie nastąpiło pomyślnie!</h2>
            <div className='decoration'></div>
            <button className='logout__btn' onClick={() => navigate("/")}>Strona główna</button>
        </div>
    </div>
  )
}

export default Logout