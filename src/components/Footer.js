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
<<<<<<< HEAD
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
=======
    <footer className="page-footer font-small bg-blue pt-4">
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-6 mt-md-0 mt-3">
            <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
            <p>You can contact us on 46-811-111-11</p>
          </div>
          <div className="col-md-6 mb-md-0 mb-3">
            <h5 className="text-uppercase font-weight-bold">Return Policy</h5>
            <p>We accept returns after 7 days max</p>
          </div>
        </div>
      </div>
      <div className="footer-copyright text-center py-3">
        © 2022 Copyright:
        <span>Vito Ferrari</span>
      </div>
    </footer>
>>>>>>> 0fdb040fbf840019ad5979fc09b8728983141b45
  )
}

export default Footer
