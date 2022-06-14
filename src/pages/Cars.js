import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CarItem from './CarItem'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { motion } from 'framer-motion'
const PageWrapper = motion.div
const PageVariant = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
}

function Cars() {
  const [cars, setCars] = useState([])

  const fetchCars = async () => {
    const data = await fetch('https://codexplained.se/cars.php')
    const cars = await data.json()
    setCars(cars)
  }

  useEffect(() => {
    fetchCars()
  }, [])

  return (
    <PageWrapper>
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={PageVariant}
      >
        <CreateDiv>
          <Link to={'/cars'}>
            <ButtonAll>View All Cars</ButtonAll>
          </Link>
        </CreateDiv>

        <Container>
          {cars.map((car) => (
            <CarItem key={car.id} car={car} />
          ))}
        </Container>
      </motion.div>
    </PageWrapper>
  )
}

const Container = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
`

const CreateDiv = styled.div`
  text-align: right;
  padding: 0 25px;
  ${mobile({ margin: '20px 0' })}
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

export default Cars
