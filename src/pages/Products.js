import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button, PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'

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
    <PageWrapper
      as={motion.section}
      initial={{ x: '100vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
<<<<<<< HEAD
      <section className="container">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.url} alt={product.url} />
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <Link to={`/products/${product.id}`}>
              <Button
                as={motion.button}
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                View
              </Button>{' '}
            </Link>
=======
      <div id="wrapper">
        {products.map((product) => (
          <div class="card">
            <div key={product.id}>
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src={product.url} alt={product.url} />
                </figure>
              </div>
              <div class="card-content">
                <h2 class="title product-title">{product.title}</h2>
                <div class="content">
                  <p>
                    <strong>Price: </strong> {product.price}
                  </p>
                </div>
                <Link to={`/products/${product.id}`}>
                  <Button
                    as={motion.button}
                    whileHover={{
                      scale: 1.2,
                      transition: { duration: 1 },
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    More Details
                  </Button>{' '}
                </Link>
              </div>
            </div>
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45
          </div>
        ))}
      </div>
    </PageWrapper>
  )
}

export default Products
