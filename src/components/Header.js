import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '../styledComponents'

function Header() {
  return (
    <nav>
      <a className="navbar-brand">Vito Ferrari</a>
      <h1 class="title">Cars for Sale</h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products">Cars</NavLink>
      <Button type="submit">Cart</Button>
      {/* <div id="cart"></div> */}
    </nav>
  )
}

const NavLink = styled(Link)`
  color: var(--mainWhite);
  text-decoration: none;
  padding: 0.25em 1em;
  border: 2px solid var(--lightBlue);
  margin: 1em;
  font-size: 1.25em;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border-radius: 3px;
  background-color: var(--mainBlue);

  &:hover {
    background-color: var(--mainYellow);
    color: var(--mainDark);
    border: 1px solid var(--mainYellow);
  }
`
export default Header
