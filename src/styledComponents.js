import styled from 'styled-components'

export const HeaderWrapper = styled.nav`
  width: 100%;
  height: 97px;
  background-color: var(--mainDark);
  color: var(--mainWhite);

  padding: 0 5vw;
  border-bottom: 1px solid rgba(255, 255, 255, 0.514);
  position: relative;

  .container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .hamburger-menu,
  .cart-container {
    position: relative;
    font-size: 3.5rem;
    cursor: pointer;
    background: none;
    width: auto;
  }

  ul {
    display: none;
  }

  @media (min-width: 1025px) {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    .container {
      max-width: var(--max-width);
      margin: auto;
    }
    .hamburger-menu {
      display: none;
    }
    ul {
      display: flex;
    }
    li {
      margin-right: 1.5rem;
      font-size: 1.3rem;
      letter-spacing: 0.2rem;
      font-size: 700;
      text-transform: uppercase;
      cursor: pointer;
    }
    li:hover {
      color: var(--mainYellow);
    }
  }
`

export const PageWrapper = styled.section`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    padding: 0 5vw;
  }

  img {
    position: absolute;
    top: 10vh;
    left: 0;
    z-index: -1;
    width: 100vw;
    height: 80vh;
    object-fit: fill;
    background-position: -50px -110px;
    background-size: 120%;
    background-repeat: no-repeat;
  }

  h2 {
    font-size: 2rem;
    font-weight: bold;
    color: var(--mainDark);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.5rem;
    color: var(--mainDark);
    margin-bottom: 1rem;
  }

  @media (min-width: 768px) {
    .section-text {
      width: 50%;
    }

    .img {
      background-position-x: -50px;
    }
  }
  @media (min-width: 1025px) {
    justify-content: left;
    align-items: center;
    /* height: 800px; */
    .container {
      width: 100%;
      max-width: var(--max-width);
      margin: auto;
      padding: 0 5vw;
    }
    .img {
      width: 100%;
      height: 100vh;
      max-width: 2000px;
      margin: auto;
      position: absolute;
      top: 0;
      left: 0;
    }
  }
`

export const MainWrapper = styled.section`
  .container {
    width: 100%;
    max-width: var(--max-width);
    margin: auto;
    padding: 0 5vw;
  }

  p {
    font-size: 1.5rem;
    color: var(--mainYellow);
    margin-bottom: 1rem;
  }
  img {
    max-width: 100%;
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5rem;
    a {
      width: 30%;
    }
  }
  @media (min-width: 1025px) {
    width: 100%;
    margin: auto;
    max-width: var(--max-width);
    .img {
      background-size: 200px;
    }
  }
`


export const FooterWrapper = styled.footer`
  width: 100%;
  background-color: var(--mainDark);
  position: relative;
  .footer-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 3rem;
  }
  li {
    color: white;
    margin-bottom: 1.5rem;
    font-size: 1.3rem;
    text-transform: uppercase;
    cursor: pointer;
  }
  li:hover {
    color: var(--mainYellow);
  }
  .text,
  .copyright {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
    color: var(--mainYellow);
    text-align: center;
  }
  .copyright {
    margin-top: 3rem;
  }

  .icon-container {
    color: white;
    font-size: 4rem;
    padding-bottom: 3rem;
    i {
      padding: 1rem;
      cursor: pointer;
    }
    i:hover {
      color: var(--mainYellow);
    }
  }

  @media (min-width: 768px) {
    padding: 0 3rem;
    align-items: flex-start;
    ul {
      margin-top: 3rem;
      flex-direction: row;
    }
    li {
      margin-right: 1.5rem;
    }
    .text,
    .copyright {
      margin-left: 0;
      max-width: 700px;
      text-align: start;
      width: 100%;
    }
    .icon-container {
      position: relative;
      top: -7rem;
    }
  }
  @media (min-width: 1025px) {
    .footer-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      max-width: var(--max-width);
      width: 90%;
      margin: auto;
      max-width: var(--max-width);
      position: relative;
    }
    .footer-container::after {
      content: '';
      width: 100px;
      height: 4px;
      top: 0;
      background-color: var(--mainYellow);
      position: absolute;
    }
    ul {
      justify-content: flex-end;
    }
    li {
      margin-right: 3rem;
    }
    li:nth-child(4) {
      margin-right: 0;
    }
    .icon-container {
      width: 100%;
      position: static;
      display: flex;
      justify-content: flex-end;
    }
  }
`
