import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'

function Product() {
  const params = useParams()
  console.log(params)

  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    const data = await fetch(
      `https://codexplained.se/cars.php?id=${params.productId}`
    )
    const product = await data.json()
    setProduct(product)
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  return (
    <PageWrapper>
      <motion.h2
        initial={{
          x: -400,
          y: -200,
          opacity: 0,
          fontSize: '1em',
        }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          rotate: 360,
          fontSize: '2em',
          color: '#fff',
        }}
        transition={{
          type: 'spring',
          ease: 'easeInOut',
          duration: 1,
        }}
      ></motion.h2>
      <section>
        <h2>{params.id}</h2>
        <h2>{product.title}</h2>
        <img src={product.url} alt={product.url} />
        <p>Price: {product.price}</p>
        <p>{product.description}</p>
        <p>Stock: {product.storage}</p>
        {/* <Button></Button> */}
        <Link to="/products">
          <ExtendingStyleBtn           
            as={motion.button}
            whileHover={{
              x: -10,
              transition: { type: 'tween', stiffness: 100, duration: 0.5 },
            }}
          >
            Back to products{' '}
          </ExtendingStyleBtn>
        </Link>
      </section>
    </PageWrapper>
  )
}

export default Product

const ExtendingStyleBtn = styled.button`
  color: var(--mainDark);
  text-decoration: none;
  cursor: pointer;
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  font-weight: bold;
  border: 1px solid var(--lightBlue);
  border-radius: 3px;
  background-color: var(--mainYellow);

  &:hover {
    background-color: var(--mainDark);
    color: var(--mainWhite);
    border: 1px solid var(--lightBlue);
  }
`
