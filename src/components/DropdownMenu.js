import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './Header.css'
import './Custom.css'
import { Link } from 'react-router-dom'

function DropdownMenu() {
  return (
    <Dropdown className="drop-down">
      <Dropdown.Toggle id="dropdown-button-dark" variant="outline-light">
        <FontAwesomeIcon className="bar-icon" icon={faBars} size="2xl" />
      </Dropdown.Toggle>

      <Dropdown.Menu className="drop__downMenu" variant="black">
        <h1 className="category__intro">Kategorier</h1>
        <Dropdown.Divider />
        <Link className="drop__link" to="/nya-bilar">
          <Dropdown.Item className="drop__downItem" href="#/action-1">
            Nya bilar
          </Dropdown.Item>
        </Link>
        <Dropdown.Divider />

        <Link className="drop__link" to="/vintage-bilar">
          <Dropdown.Item className="drop__downItem" href="#/action-2">
            Vintage bilar
          </Dropdown.Item>
        </Link>

        <Dropdown.Divider className="last_divider" />

        <Link className="drop__link" to="/leksaksbilar">
          <Dropdown.Item className="drop__downItem" href="#/action-3">
            Leksaksbilar
          </Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default DropdownMenu
