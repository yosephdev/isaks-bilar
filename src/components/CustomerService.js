import React from "react";
import "./About.css";
import Textbox from "./Textbox"

const CustomerService = () => {

  return (
    <>
    <div className="home">
      <div className="home__container">
            <Textbox heading="Kontakta Oss" 
            text="
            Kundtjanst@isaksbilar.se
            Telefon: xxx - xxx xx xx
            Öppetider: Vardagar 10.00 - 16.00" />

            <Textbox heading="Frågor och svar" 
            text="Vi behandlar alla frågor från kunder helt konfidentiellt." />

             <Textbox heading="Våra butiker" 
            text="För närvarande har vi bara en butik, och den är online." />
        
      </div>
    </div>
</>
  );
};

export default CustomerService;
