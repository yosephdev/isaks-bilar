import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item'
import './Products.css'

const Products = (props) => {
  const { make, year, model } = useParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const url = `https://www.carqueryapi.com/api/0.3/?cmd=getTrims&make=${make}&year=${year}&model=${model}`
    fetch(url)
      .then((response) => response.json())
      .then((data) => setItems(data.Trims))
  }, [make, year, model])

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
