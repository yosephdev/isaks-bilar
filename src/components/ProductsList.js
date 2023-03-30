import React from 'react'
import { useState } from 'react'

import Products from './Products'
import './Productslist.css'

const ProductsList = (props) => {
 const [image] = useState([])
   return (
    <div className="list__container">
      <div className="page__title">
        <h1 className="title">Isaks - {props.catName}</h1>
      </div>
      <div className="page__image">
        {image.map((n, i) => {
          if (n.categoryId === props.catId) {
            return <img className="image" key={i} src={n.image}></img>;
          }
        })}
      </div>
      <div className="products">
        <Products catId={props.catId} />        
      </div>
    </div>
  );
};

export default ProductsList;