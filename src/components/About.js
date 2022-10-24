import React from 'react'
import './About.css'
import Textbox from './Textbox'

const About = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <Textbox
            heading="Om Baby's & Me"
            text="Vi på Baby's & Me anser att vår barndom är en så värdefull tid i våra liv att det helt enkelt inte finns tid att leka med leksaker som saknar funktion eller estetik. Vi erbjuder handgjorda och naturliga leksaker som passar oavsett vilken ålder ditt barn har. 
"
          />

          <Textbox
            heading="Jobba hos oss"
            text="För närvarande söker vi inga fler medarbetare, men vi planerar att utöka vår spa-verksamhet. Om du älskar babyar och 
            drömmer om att arbeta med att hjälpa babyägare att ge deras fyrbenta kamrater sann livskvalitet skicka in din CV och ett brev 
            där du förklarar hur just du kan ge våra kunder en oförglömlig upplevelse."
          />

          <Textbox
            heading="Nyheter"
            text="Vi har precis lanserat vår nya line med leksaker för barn. Vi har tagit fram en serie leksaker som är perfekta för barn som är mellan 1-3 år. 
             Vi är stolta över att kunna erbjuda våra kunder en serie leksaker som är både säkra och roliga."
          />
        </div>
      </div>
    </>
  )
}

export default About
