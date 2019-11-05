import React, { useState } from "react";
import "../App.css";
import { connect } from "react-redux";
import { signInAction } from "../../actions/authActions";
import { Redirect } from "react-router-dom";

const SignIn = ({ authError, signInAction, auth }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signInAction({ email, password });
  };

  if (auth.uid) return <Redirect to="/" />;
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="authForm">
        <div className="inputField">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            placeholder="email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
      <div className="error">{authError ? <p>{authError}</p> : null}</div>
    </div>
  );
};

const mapStatetoProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(
  mapStatetoProps,
  { signInAction }
)(SignIn);
