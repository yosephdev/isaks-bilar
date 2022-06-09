import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { PageWrapper } from '../styledComponents'
import { motion } from 'framer-motion'
import { mobile } from '../responsive'

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
      <CreateDiv>
        <Link to={'/cars'}>
          <ButtonAll>View All Cars</ButtonAll>
        </Link>        
      </CreateDiv>

      <Header>Our Service</Header>
      <Container>
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
          </div>
        ))}
      </Container>
    </PageWrapper>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const Header = styled.h1`
  text-align: center;
  cursor: pointer;
`

const CreateDiv = styled.div`
  text-align: right;
  padding: 0 25px;
  ${mobile({ margin: '20px 0' })}
`

const Button = styled.button`
  padding: 12px 35px;
  border: 1px solid white;
  background-color: lightcoral;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  &:hover {
    background-color: lightslategrey;
  }
`

const ButtonAll = styled.button`
  padding: 12px 35px;
  border: 1px solid white;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  margin-right: 5px;
  &:hover {
    background-color: lightslategray;
  }
`

export default Products
