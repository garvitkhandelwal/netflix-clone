import React, { useState, useEffect } from "react";
import logo from "../img/logo.png";
import avatar from "../img/avatar.png";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  // handleShow = () => {

  // }
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) handleShow(true);
      else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img src={logo} alt="Netflix Logo" className="nav-logo" />
      <img src={avatar} alt="Netflix Avatar" className="nav-avatar" />
    </div>
  );
}

export default Nav;
