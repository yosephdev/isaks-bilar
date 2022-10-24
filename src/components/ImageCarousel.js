import React from "react";
import { Carousel } from "react-bootstrap";
import "./ImageCarousel.css";
import image1 from "../logopack/10.jpg";
import image2 from '../logopack/mockup.jpg'
import image3 from '../logopack/16.jpg'

const ImageCarousel = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>Premium products</h3>
            <p>Våra produkter är våra, du hittar dem inte någon annanstans.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Premium quality</h3>
            <p>Våra produkter är av högsta kvalitet.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Perfect fit</h3>
            <p>
              Våra produkter är anpassade för din bebis, så att du kan känna dig
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ImageCarousel;
