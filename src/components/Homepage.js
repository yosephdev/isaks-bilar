import React from "react";
import Products from "./Products";
import Intro from "./Intro";
import "./Home.css";
import Shipping from "./Shipping";
import ProductsList from "./ProductsList";

const Homepage = () => {
  return (
    <div className="home">
      <Intro />
      <Shipping />
      <div className="home__container">
        <div className="home__title">
          <h1 className="category-name">
            Nya bilar <span className="category-name__underline"></span>
          </h1>
          <ProductsList catId={1} catName="Nya bilar" />
        </div>

        <div className="home__title">
          <h1 className="category-name">Gammla bilar</h1>
          <ProductsList catId={2} catName="Gammla bilar" />
        </div>

        <div className="home__title">
          <h1 className="category-name">Barn Bilar</h1>
          <ProductsList catId={3} catName="Barn Bilar" />
        </div>
      </div>
    </div>
  )
}

export default Homepage;