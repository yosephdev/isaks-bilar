import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <div>
      <NavLink to="/">Home</NavLink> <NavLink to="/products">Products</NavLink>
    </div>
  )
}

const NavLink = styled(Link)`
  color: var(--mainWhite);
  text-decoration: none;
  padding: 0.25em 1em;
  margin: 1em;
  font-size: 1em;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid var(--mainWhite);
  border-radius: 3px;
  background-color: var(--mainBlue);

  &:hover {
    background-color: var(--mainYellow);
    color: #000;
    border: 1px solid var(--mainYellow);
  }
`
export default Header
