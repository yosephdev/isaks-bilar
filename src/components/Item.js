import React from "react";
import "./Button.css";
import "./Item.css";
import { useStateValue } from "./StateProvider";

const Item = ({ image, prodName, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        image: image,
        prodName: prodName,
        price: price,
      },
    });
  };

  return (
    <div className="item">
      <img className="prod prod-image" src={image}></img>
      <p className="prod prod-name">{prodName}</p>
      <p className="prod prod-price">{price} kr</p>
      <button className="buy-button" onClick={addToBasket}>
        Köp
      </button>
    </div>
  );
};

export default Item;
