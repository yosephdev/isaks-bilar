import React from 'react'
import { useStateValue } from './StateProvider'
import './Button.css'
import './Item.css'

const Item = ({ image, prodName, price, modelId, addToCart, make, year }) => {
  const [{ basket }, dispatch] = useStateValue()

  const handleClick = () => {
    addToCart(modelId)
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        image: image,
        prodName: prodName,
        price: price,
        make: make,
        year: year,
      },
    })
  }

  return (
    <div className="item">
      <img className="prod prod-image" src={image} alt={prodName} />
      <p className="prod prod-name">{prodName}</p>
      <p className="prod prod-year">{year}</p>
      <p className="prod prod-price">{price} kr</p>
      <button className="buy-button" onClick={handleClick}>
        Köp
      </button>
    </div>
  )
}

export default Item
