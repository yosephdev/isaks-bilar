import React from "react";
import "./About.css";
import Textbox from "./Textbox"

const Club = () => {

  return (
    <>
    <div className="home">
      <div className="home__container">
            <Textbox heading="Om vår Kundklubb" 
            text="Som medlem i vår Kundklubb får du vårt nyhetsbrev per email, missa inga erbjudanden!
            
            Dessutom får alla våra medlemmar 10% rabatt på alla köp över SEK500." />

            <Textbox heading="Logga in/Bli medlem" 
                        text="" />

            <Textbox heading="Frågor/Svar Kundklubben" 
                        text="" />

      </div>
    </div>
</>
  );
};

export default Club;
