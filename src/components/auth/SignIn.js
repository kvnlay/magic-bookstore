import React, { useState } from "react";
import "../App.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password);
  };

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
    </div>
  );
}
