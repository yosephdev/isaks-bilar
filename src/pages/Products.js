import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchProducts = async () => {
    const data = await fetch('https://codexplained.se/sportstuff.php')
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
        <section>
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <img src={product.url} alt={product.url} />
              <p>{product.price}</p>
              <Link to={`/products/${product.id}`}>View</Link>
            </div>
          ))}
        </section>
      )}
    </div>
  )
}

export default Products
