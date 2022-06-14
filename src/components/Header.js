import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { mobile } from '../responsive'

function Header() {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to={'/'}>
            <Logo>Isaks Auto Mart</Logo>
          </Link>
        </Left>

        <Center>
          <MenuItem>
            <Link to={'/'}>Home</Link>
          </MenuItem>
          <MenuItemM>
            {' '}
            <Link to={'/cars'}>Car Lists</Link>
          </MenuItemM>
          <MenuItem>
            {' '}
            <Link to={'/'}>Contact us</Link>
          </MenuItem>
        </Center>
      </Wrapper>
    </Container>
  )
}

const Container = styled.div`
  height: 60px;
  // background:red;
  ${mobile({ height: '60px' })}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: '10px 5px' })}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`

const Center = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
`

const Logo = styled.h1`
  font-weight: bold;
  font-family: 'La Belle Aurore', sans-serif;
  font-size: 24px;
  color: black;
  ${mobile({ fontSize: '16px' })}
`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 400;
  ${mobile({ fontSize: '11px', marginLeft: '6px' })}
`
const MenuItemM = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: 400;
  display: initial;
  ${mobile({ fontSize: '12px', marginLeft: '5px', display: 'none' })}
`

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid blue;
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  margin-right: 5px;
  &:hover {
    background-color: #f8f4f4;
  }
`
const Button2 = styled.button`
  padding: 10px 25px;
  border: 1px solid white;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  color: white;
  &:hover {
    background-color: teal;
  }
  ${mobile({ fontSize: '12px', padding: '10px' })}
`

export default Header
