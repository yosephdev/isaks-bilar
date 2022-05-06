import React from 'react'
import { FooterWrapper } from '../styledComponents'
import { Link } from 'react-router-dom'
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from 'react-icons/ai'

function Footer() {
  return (
    <FooterWrapper>
      <div className="footer-container">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Cars</Link>{' '}
          </li>
        </ul>
        <div className="text">
          <p>
            Adeca is an all in one stop to fulfill your luxurious car needs.
            Come and visit our store - we are open 7 days a week.
          </p>
          <p className="copyright">Copyright 2022. All Rights Reserved</p>
        </div>

        <div className="icon-container">
          <i>
            <AiFillFacebook />
          </i>
          <i>
            <AiOutlineTwitter />
          </i>
          <i>
            <AiOutlineInstagram />
          </i>
        </div>
      </div>
    </FooterWrapper>
  )
}

export default Footer
