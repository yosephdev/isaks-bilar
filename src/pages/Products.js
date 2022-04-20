import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const data = await fetch('https://codexplained.se/cars.php')
    const products = await data.json()
    setProducts(products)
    setLoading(false)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Section>
          {products.map((product) => (
            <div key={product.id}>
              <img src={product.url} alt={product.url} />
              <h2>{product.title}</h2>
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`}>View</Link>
            </div>
          ))}
        </Section>
      )}
    </div>
  )
}

export default Products

const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
  padding: 1rem;

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
    background: var(--mainBlue);
    color: var(--mainWhite);
    border: none;
    padding: 0.5rem 1.5rem;
    text-transform: capitalize;
    font-size: 1rem;
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
  }
`
