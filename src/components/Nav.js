import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./App.css";

const Nav = () => (
  <div className="panel">
    <div className="menu">
      <h1 className="logo">Bookstore CMS</h1>
      <div className="menu-link">
        <Link to="/signin">sign in</Link>
        <Link to="/signup">sign up</Link>
      </div>
    </div>
    <div className="panel-icon">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
    </div>
  </div>
);

export default Nav;
