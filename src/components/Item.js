import React from 'react'
import { useStateValue } from './StateProvider'
import './Button.css'
import './Item.css'

const Item = ({ image, prodName, price, addToCart }) => {
  const [{ basket }, dispatch] = useStateValue()

  const handleClick = () => {
    addToCart()
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        image: image,
        prodName: prodName,
        price: price,
      },
    })
  }

  return (
    <div className="item">
      <img className="prod prod-image" src={image} alt={prodName} />
      <p className="prod prod-name">{prodName}</p>
      <p className="prod prod-price">{price} kr</p>
      <button className="buy-button" onClick={handleClick}>
        Köp
      </button>
    </div>
  )
}

export default Item
