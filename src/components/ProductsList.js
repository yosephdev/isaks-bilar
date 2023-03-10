import React, { useState } from 'react'
import { designImage } from './data'
import Products from './Products'
import './Productslist.css'

const ProductsList = (props) => {
  const [image] = useState(designImage)
  const categoryIds = [props.catId, props.catId + 1] // define an array of category IDs
  return (
    <div className="list__container">
      <div className="page__title">
        <h1 className="title">{props.catName}</h1>
      </div>

      <div className="page__image">
        {image.map((n, i) => {
          if (n.categoryId === props.catId) {
            return <img className="image" key={i} src={n.image}></img>
          }
        })}
      </div>
      <div className="products">
        {/* render Products component with different catId props */}
        {categoryIds.map((categoryId) => (
          <Products key={categoryId} catId={categoryId} />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
