import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper } from '../styledComponents'

import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'
// import { useProductsContext } from '../context/ProductsContext'
import Cart from './Cart'

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
            <Link to="/products">Cars for Sale</Link>
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

export default Header
