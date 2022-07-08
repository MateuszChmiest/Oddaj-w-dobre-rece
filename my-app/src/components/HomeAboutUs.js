import React from 'react';
import signature from "../assets/Signature.svg";

const HomeAboutUs = () => {
  return (
    <section className='aboutUs'>
      <div className='aboutUs__wrap'>
        <div className='aboutUs__text'>
          <h3>O nas</h3>
          <div className='aboutUs__decoration'/>
          <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        </div>
        <div className='aboutUs__signature'>
          <img src={signature} alt="signature"/>
        </div>
      </div>
      <div className='aboutUs__image'/>
    </section>
  )
}

export default HomeAboutUs