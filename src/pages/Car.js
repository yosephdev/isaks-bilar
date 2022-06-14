import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { mobile } from '../responsive'



function Car() {
  const location = useLocation()
  const car_id = location.pathname.split('/')[2]


  const [car, setCar] = useState({})

   useEffect(() => {
     const fetchCar = async () => {
       const data = await fetch(
         `https://codexplained.se/cars.php?id=${car_id}`
       )
       const car = await data.json()
       setCar(car)
     }

     fetchCar();
   }, [car_id]) 

  return (
    
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={car.url} />
          </ImgContainer>
          <InfoContainer>
            <Title>{car.title}</Title>
            <Desc>{car.description}</Desc>
            <Price>Model Name: {car.title}</Price>
            <Price>Price: $ {car.price}</Price>
            <Link to={'/'}>
              <Button>View All Cars</Button>
            </Link>
          </InfoContainer>
        </Wrapper>
      </Container>  
  )
}

export default Car

const Container = styled.div``

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`

const ImgContainer = styled.div`
  flex: 1.5;
`

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`

const Title = styled.h1`
  font-weight: 200;
`

const Desc = styled.p`
  margin: 20px 0px;
`

const Price = styled.p`
  font-weight: 100;
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 400;
`

const Button = styled.button`
  padding: 10px 25px;
  border: 1px solid black;
  background-color: teal;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: teal;
  }
`