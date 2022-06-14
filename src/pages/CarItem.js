import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

function CarItem({ car }) {   

  return (
    <Container>
      <Link style={{ textDecoration: 'none' }} to={`/car/${car.id}`}>
        <Image src={car.url} />

        <Desc>{(car.description && car.description).slice(0, 70)}.... </Desc>
        <Info>
          <Title>{car.title}</Title>
        </Info>
      </Link>

      <div style={{ position: 'absolute' }}>
        <Link style={{ textDecoration: 'none' }} to={`/car/${car.id}`}>
          <View>View Now</View>
        </Link>
      </div>
    </Container>
  )
}

export default CarItem


const Container = styled.div`
  flex: 2;
  margin: 5px;
  display: block;
  align-items: center;
  justify-content: center;
  min-width: 280px;
  height: 400px;
  position: relative;
  border: 1px solid #fcf5f5;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgb(0 0 0 / 0.2);
  background: #ffffff;
  padding: 30px 10px;
  ${mobile({ height: '362px' })}
`

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  ${mobile({ height: '30vh' })}
`

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: white;
  font-weight: bold;
  margin-bottom: 20px;
  ${mobile({ marginBottom: '170px' })}
`

const Desc = styled.p`
  color: black;
  padding: 10px;
  ${mobile({ padding: '30px 10px' })}
`

const View = styled.button`
  border: none;
  padding: 10px 25px;
  border-radius: 5px;
  background-color: teal;
  color: white;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #a6cfdc;
  }
`
