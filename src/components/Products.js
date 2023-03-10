import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import './Products.css'

const Products = (props) => {
  const { make, year, model } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    // Debugging statement to log the URL being requested
    console.log(
      `Requesting URL: https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${make}&year=${year}&model=${model}`
    )
    const url = `https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${make}&year=${year}&model=${model}`
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        if (data.Trims) {
          setItems(data.Trims)
        } else {
          throw new Error('Trims data was not found in the response')
        }
      })
      .catch((error) => {
        console.error('Error fetching trims data:', error)
      })
  }, [make, year, model])

  // Debugging statement to log the items state
  console.log('Items:', items)

  return (
    <div className="prods">
      {items.map((item, i) => (
        <Item
          key={i}
          image={item.model_img_url}
          prodName={`${item.model_name} ${item.model_trim}`}
          price={item.model_msrp}
          onClick={() => props.addToCart(item.model_id)}
        />
      ))}
    </div>
  )
}

export default Products
