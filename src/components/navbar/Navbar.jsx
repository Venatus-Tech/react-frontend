import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./venatusLogo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function Navbar() {
  const [clicked, onClicked] = useState(false);

  return (
    <div className='navbar'>
      <div className='v-logo-div'>
        <img src={Logo} alt='venatusLogo' className='vlogo' />
      </div>
      <div className={clicked ? "list-active" : "list"}>
        <p className='list-item'>
          <Link to='/' style={{ color: "inherit", textDecoration: "inherit" }}>
            Home
          </Link>
        </p>

        <p className='list-item'>
          <Link
            to='/about'
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            About
          </Link>
        </p>
        <p className='list-item'>
          <Link
            to='/events'
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Events
          </Link>
        </p>
        <p className='list-item'>
          <Link to='/' style={{ color: "inherit", textDecoration: "inherit" }}>
            Communities
          </Link>
        </p>
        <p className='list-item'>
          <Link
            to='/members'
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            Members
          </Link>
        </p>
        <p className='list-item'>
          <Link to='/' style={{ color: "inherit", textDecoration: "inherit" }}>
            Blog
          </Link>
        </p>
        <div className='register'>
          <p className='register-text'>Register</p>
        </div>
      </div>
      <div className='button'>
        <p className='register-text'>Register</p>
      </div>
      <div
        className='icon-div'
        onClick={() => {
          onClicked(!clicked);
        }}
      >
        <FontAwesomeIcon icon={faBars} className='icon' />
      </div>
    </div>
  );
}
export default Navbar;
