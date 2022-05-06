import React from 'react'
import { Link } from 'react-router-dom'
<<<<<<< HEAD
import { HeaderWrapper } from '../styledComponents'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
// import { useProductsContext } from '../context/ProductsContext'
import Cart from './Cart'
=======
import styled from 'styled-components'
import { Button } from '../styledComponents'
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45

function Header() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  //  const { cart } = useProductsContext()

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
    if (!isMenuOpen) {
      document.body.classList.toggle('no-scroll')
    } else {
      setIsMenuOpen(false)
    }
  }
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isCartOpen) {
      document.body.classList.toggle('no-scroll')
    } else {
      setIsCartOpen(false)
    }
  }

  return (
<<<<<<< HEAD
    <HeaderWrapper>
      <div className="container">
        <div className="hamburger-menu" onClick={() => toggleMenu()}>
          <GiHamburgerMenu />
        </div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Cars</Link>
          </li>
        </ul>
        <button className="cart-container" onClick={toggleCart}>
          <AiOutlineShoppingCart />
          {/* <span className="number">{cart.length}</span> */}
        </button>
        {isCartOpen && <Cart toggleCart={toggleCart} />}
      </div>
      {/* {isMenuOpen && <MobileMenu toggleMenu={toggleMenu}/>} */}
    </HeaderWrapper>
  )
}

=======
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
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45
export default Header
