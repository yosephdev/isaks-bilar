import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

function Product() {
  const params = useParams()
  console.log(params)

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchProduct = async () => {
    const data = await fetch(
      `https://codexplained.se/cars.php?id=${params.productId}`
    )
    const product = await data.json()
    setProduct(product)
    setLoading(false)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Section>
          <h2>{params.id}</h2>
          <h2>{product.title}</h2>
          <img src={product.url} alt={product.url} />
          <p>Price: {product.price}</p>
          <p>{product.description}</p>
          <p>Stock: {product.storage}</p>
          <button>Add to cart</button>
        </Section>
      )}
    </div>
  )
}

export default Product

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;

  img {
    width: 100%;
    height: auto;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  a {
    text-decoration: none;
    color: var(--mainBlue);
  }

  button {
    background: var(--mainBlue);
    color: var(--mainWhite);
    border: none;
    padding: 0.5rem 1.5rem;   
    margin-left: auto;
    text-transform: capitalize;
    font-size: 1rem;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }
`
