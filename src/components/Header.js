import React from "react";
import logo from "../logopack/logo.png";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBasketShopping,
  faUser,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import DropdownMenu from "./DropdownMenu";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }] = useStateValue();

  return (
    <div className="header">
      <Link className="links link__header" to="/">
        <img className="header__logo" src={logo} />
      </Link>
      <Link className="links link__header" to="/">
        <div className="logo__name">
          <h1>Isaks Bilar</h1>
        </div>
      </Link>
      <div className="category__bar">
        <DropdownMenu />
      </div>

      <div className="header__search">
        <input
          className="header__searchInput"
          type="text"
          placeholder="Search product ..."
        />
        <FontAwesomeIcon
          className="header__searchIcon"
          icon={faMagnifyingGlass}
        />
      </div>

      <div className="header__nav">
        <Link className="links link_header" to="/customer">
          <div className="header__option option__hoverGray">
            <span className="header__optionLine ">
              Kundservice{" "}
              <span>
                <FontAwesomeIcon className="cservice__icon" icon={faMessage} />
              </span>
            </span>
          </div>
        </Link>

        <Link className="links link__header" to="/varukorg">
          <div className="header__option items__basket">
            <span className="header__optionLine basket__line">
              Varukorg{" "}
              <span>
                <FontAwesomeIcon
                  className="basket__icon"
                  icon={faBasketShopping}
                />
                <span className="number_basketItem">{basket?.length}</span>
              </span>
            </span>
          </div>
        </Link>

        <div className="header__option option__hoverGray">
          <span className="header__optionLine ">
            Logga in{" "}
            <span>
              <FontAwesomeIcon className="user__icon" icon={faUser} />
            </span>{" "}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
