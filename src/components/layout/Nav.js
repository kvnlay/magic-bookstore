import React from "react";
import "../App.css";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";

const Nav = () => (
  <div className="panel">
    <div className="menu">
      <h1 className="logo">
        <Link to="/">Bookstore CMS</Link>
      </h1>
      <SignedInLinks />
      <SignedOutLinks />
    </div>
  </div>
);

export default Nav;
