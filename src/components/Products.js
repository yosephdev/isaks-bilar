import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import './Products.css'

const Products = (props) => {
  const { make, model } = useParams()
  const [items, setItems] = useState([])
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/car-models?make=${make}&model=${model}&year=latest`
    fetch(url, {
      headers: {
        'X-Api-Key': apiKey,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.length > 0) {
          setItems(data)
        } else {
          throw new Error('No car models found for the given make and model')
        }
      })
      .catch((error) => {
        console.error('Error fetching car models data:', error)
      })
  }, [make, model])

  return (
    <div className="prods">
      {items.map((item, i) => (
        <Item
          key={i}
          image={`https://api.api-ninjas.com${item.imageUrl}`}
          prodName={`${props.make} ${item.prodName}`}
          price={item.price}
          modelId={item.modelId}
          // addToCart={addToCart}
          make={props.make}
          year={`${item.year}`}
        />
      ))}
    </div>
  )
}

export default Products
