import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function Header() {
  return (
    <NavWrapper className="Navbar navbar-expand-sm navbar-dark px-sm-5">
      <div className="d-flex align-items-center justify-content-center">      
        <ul className="navbar-nav align-item-center">
          <li className="nav-item ml-5">
            <Link to="/products"> Products </Link>
          </li>
        </ul>
      </div>
    </NavWrapper>
  )
}

export default Header

const NavWrapper = styled.nav`
  background: var(--lightBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
    padding-top: 1rem;
  }
`
