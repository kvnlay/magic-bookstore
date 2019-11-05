import React, { useState } from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUpAction } from "../../actions/authActions";

function SignUp({ auth, signup, authError }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    signup({ username, email, password });
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
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="username"></label>
          <input
            type="username"
            name="username"
            placeholder="Username"
            onChange={e => setUsername(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Sign up</button>
      </form>
      <div className="error">{authError ? <p>{authError}</p> : null}</div>
    </div>
  );
}

const mapStatetoProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

export default connect(
  mapStatetoProps,
  {
    signup: signUpAction
  }
)(SignUp);
