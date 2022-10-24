import React from "react";
import "./Textbox.css";

const Textbox = ({heading, text}) => {

  return (
    <>
    <div className="home">
      <div className="home__container">
      
            <h3 className="heading">{heading}</h3>
            <p className="text">{text}</p>
            
      </div>
    </div>
</>
  );
};

export default Textbox;
