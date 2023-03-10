import React from "react";
import "./Intro.css";
import ImageCarousel from "./ImageCarousel";
import image5 from "../images/9.jpg";
import image6 from '../images/11.jpg'
import image7 from '../images/13.jpg'
import image8 from '../images/15.jpg'

function Intro() {
  return (
    <div className="image__container">
      <div className="box-1 ">       
        <h1>Välkommen till vår webbutik!</h1>
      <ImageCarousel />
      </div>
      <div className="box-col">
        <img className="images" src={image5}></img>
        <img className="images" src={image6}></img>
      </div>
      <div className="box-col">
        <img className="images" src={image7}></img>
        <img className="images" src={image8}></img>
      </div>
    </div>
  )
}
export default Intro;
