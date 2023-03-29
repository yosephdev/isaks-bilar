import React, { useState, useEffect } from 'react'
import Products from './Products'
import './Productslist.css'

const ProductsList = (props) => {
  const [image, setImage] = useState([])
  const categoryIds = [props.catId, props.catId + 1] // define an array of category IDs
  const apiKey = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const url = `https://api.api-ninjas.com/v1/car-images?make=${props.make}&model=${props.model}&year=latest`
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
          setImage(data)
        } else {
          throw new Error('No car images found for the given make and model')
        }
      })
      .catch((error) => {
        console.error('Error fetching car images data:', error)
      })
  }, [props.make, props.model])

  return (
    <div className="list__container">
      <div className="page__title">
        <h1 className="title">{props.catName}</h1>
      </div>

      <div className="page__image">
        {image.map((n, i) => {
          if (n.categoryId === props.catId) {
            return <img className="image" key={i} src={n.imageUrl}></img>
          }
        })}
      </div>

      <div className="products">
        {/* render Products component with different make and model props */}
        {categoryIds.map((categoryId) => (
          <Products
            key={categoryId}
            catId={categoryId}
            make={props.make}
            model={props.model}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList
