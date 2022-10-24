import React from 'react'
import './Shipping.css'
import image9 from '../images/Rectangle.svg'
import image10 from '../images/Rectangle (1).svg'
import image11 from '../images/Rectangle (2).svg'
import image12 from '../images/Rectangle (3).svg'

function Shipping() {
  return (
    <div className="shipping">
      <div className="wrapping">
        <div className="box-holder">
          <img
            className="shipping__logo truck-logo"
            src={image9} alt = "truck-logo"
          ></img>
          <span className="shipping__text">
            Snabb leverans <span>Du får din beställning snabbt</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo " src={image10} alt = 'shipping__logo' />
          <span className="shipping__text">
            Fri frakt vid beställning över 500kr{' '}
            <span>Endast 49kr om mindre</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src={image11} alt = "shipping__logo" />
          <span className="shipping__text">
            Kundklubben <span>För bästa vänner</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src={image12} alt = 'shipping__logo' />
          <span className="shipping__text">
            Professionell service<span>Vi finns alltid här för dig</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Shipping
