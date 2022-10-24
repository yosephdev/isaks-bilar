import React from "react";
import "./CheckoutProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { useStateValue } from "./StateProvider";

const CheckoutProduct = ({ image, prodName, price }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      image: image,
      prodName: prodName,
      price: price,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image " src={image} />

      <div className="checkoutProduct__info">
        <div className="checkoutProduct__title"> {prodName}</div>
      </div>

      <div className="info-box">
        <div className="checkoutProduct__price">{price} kr</div>

        <button onClick={removeFromBasket} className="trashcan__btn">
          {
            <FontAwesomeIcon
              className="trashcan__icon"
              icon={faTrashCan}
              size="lg"
            />
          }
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
