import React, { useState } from "react";
import "./Navbar.css";
import Logo from "./venatusLogo.jpg";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Modal from "./Modal";
function Navbar() {
  const [clicked, onClicked] = useState(false);
  const [event, onTrigger] = useState(false);
  return (
    <div>
      <div className="navbar">
        <div className="v-logo-div">
          <img src={Logo} alt="venatusLogo" className="vlogo" />
        </div>
        <div className={clicked ? "list-active" : "list"}>
          <p className="list-item">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Home
            </Link>
          </p>

          <p className="list-item">
            <Link
              to="/about"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              About
            </Link>
          </p>
          <p className="list-item">
            <Link
              to="/events"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Events
            </Link>
          </p>
          <p className="list-item">
            <Link
              to="/communities"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Communities
            </Link>
          </p>
          {/* <p className="list-item">
            <Link
              to="/members"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Members
            </Link>
          </p>
          <p className="list-item">
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              Blog
            </Link>
          </p> */}
        </div>
        <div
          className="register"
          onClick={() => {
            onTrigger(true);
          }}
        >
          <p className="register-text">Register</p>
        </div>

        <div
          className="button"
          onClick={() => {
            onTrigger(true);
          }}
        >
          <p className="register-text">Register</p>
        </div>
        <div
          className="icon-div"
          onClick={() => {
            onClicked(!clicked);
          }}
        >
          <FontAwesomeIcon icon={faBars} className="icon" />
        </div>
      </div>
      {event ? (
        <Modal
          title="orientation"
          close={() => {
            onTrigger(false);
          }}
          imgUrl="https://i.ibb.co/hfh1k6s/Orientation.png"
        ></Modal>
      ) : null}
    </div>
  );
}
export default Navbar;
