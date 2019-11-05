import React from "react";
import "../App.css";
import SignedInLinks from "./SignedInLinks";
import { Link } from "react-router-dom";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Nav = ({ auth }) => (
  <div className="panel">
    <div className="menu">
      <h1 className="logo">
        <Link to="/">Bookstore CMS</Link>
      </h1>
      {auth.uid ? <SignedInLinks /> : <SignedOutLinks />}
    </div>
  </div>
);

const mapStateToProps = state => {
  console.log(state);
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Nav);
