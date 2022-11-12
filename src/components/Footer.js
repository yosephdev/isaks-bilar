import React from "react";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import "./Footer.css";
import Klarna from "../logopack/Klarna.svg";
import Trygg from "../logopack/Trygg.svg";
import Media from "../logopack/media.png";


function Footer() {
  return (
    <div className="wrapper">
      <div className="footer__container">
        <div className="info__box">
          <p className="info__head"><Link to="/about">Om oss</Link></p>
          <ul>
            <li>Om Isaks Bilar</li>
            <li>Jobba hos oss</li>
            <li>Nyheter</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head cus-service"><Link to="/customer">Kundservice</Link></p>
          <ul>
            <li>Kontakta oss</li>
            <li>Frågor och svar</li>
            <li>Våra butiker</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head"><Link to="/howto">Så handlar du</Link></p>
          <ul>
            <li>Betalning</li>
            <li>Leverans</li>
            <li>Ångerrätt/Returer</li>
            <li>Köpvillkor</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head"><Link to="/club">Kundklubben</Link></p>
          <ul>
            <li>Om vår Kundklubb</li>
            <li>Logga in/Bli medlem</li>
            <li>Frågor/Svar Kundklubben</li>
          </ul>
        </div>
        <div className="info__box shadow-box">
          <p className="info__head kontakt-head">Kontakt</p>
          <ul>
            <li className="email">Kundtjanst@isaksbilar.se</li>
            <li>Telefon: xxx - xxx xx xx</li>
            <li>Vardagar 10.00 - 16.00</li>
          </ul>
        </div>
      </div>
      <div className="payment__box">
        <img className="img klarna" src={Klarna}></img>
        <img className="img trygg" src={Trygg}></img>
        <img className="img img-png" src={Media}></img>
      </div>
      <div className="copy-right">
        <p className="cr-text">
          Isaksbilar.se - Leksaksaffär online! - Copyright © 2022 - All rights reserved - Design by <a href="https://www.yoseph.dev/" target="_blank">Yoseph Berhane</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
