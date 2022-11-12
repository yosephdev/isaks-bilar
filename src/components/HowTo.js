import React from "react";
import "./About.css";
import Textbox from "./Textbox"

const HowTo = () => {

  return (
    <>
    <div className="home">
      <div className="home__container">
            <Textbox heading="Betalning" 
            text="Betalning gör med Klarna, eller mot Postförskott." />

            <Textbox heading="Leverens" 
                        text="Vi levererar med PostNord." />

            <Textbox heading="Ångerrätt/Returer" 
                        text="Som konsument har du normalt 14 dagars ångerrätt men vi erbjuder dig 30 dagars 
                        ångerrätt från det att du tagit emot varan.

                        Du har rätt att utan kostnad öppna förpackningen och kontrollera att varan fungerar. 
                        Du som konsument är däremot ansvarig för en eventuell värdeminskning av varorna inklusive 
                        originalförpackningen, som beror på en hantering utöver vad som krävs för att kunna fastställa 
                        varans egenskaper och funktion.
                        
                        Vill du utnyttja ångerrätten skickar du tillbaka varan till oss tillsammans med den returetikett 
                        du erhåller när du registrerar ditt ångrade köp." />

            <Textbox heading="Köpvillkor" 
                        text="Isaks Bilar säljer varor via internet till privatpersoner och företag i Sverige 
                        med person- eller organisationsnummer. För att handla hos oss måste du ha fyllt 18 år 
                        samt ha en giltig svensk ID-handling för paketförsändelser. Om du är under 18 år behöver 
                        du ha fått samtycke till ditt inköp från din vårdnadshavare. För kortköp där kunden är 
                        minderårig ansvarar fullmaktsgivaren för kortet." />

      </div>
    </div>
</>
  );
};

export default HowTo;
