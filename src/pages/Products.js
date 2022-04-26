import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, PageWrapper } from '../styledComponents'

function Products() {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const data = await fetch('https://codexplained.se/cars.php')
    const products = await data.json()
    setProducts(products)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <PageWrapper>
      <section>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.url} alt={product.url} />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <Link to={`/products/${product.id}`}>
              <Button>View</Button>{' '}
            </Link>
          </div>
        ))}
      </section>
    </PageWrapper>
  )
}

export default Products
