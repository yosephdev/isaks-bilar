import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Product() {
  const params = useParams()
  console.log(params)

  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchProduct = async () => {
    const data = await fetch(
      `https://codexplained.se/sportstuff.php?id=${params.productId}`
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
        <section>
          <h2>{params.id}</h2>
          <img src={product.url} alt={product.url} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.storage}</p>
          <button>Add to cart</button>
        </section>
      )}
    </div>
  )
}

export default Product
