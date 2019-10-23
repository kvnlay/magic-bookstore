import React, { useState } from "react";
import "../App.css";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password, username);
  };
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
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
