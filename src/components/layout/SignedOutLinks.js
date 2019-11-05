import React from "react";
import { Link } from "react-router-dom";

export default function SignedOutLinks() {
  return (
    <ul>
      <li>
        <Link to="/signup">Sign up</Link>
      </li>
      <li>
        <Link to="/signin">Sign in</Link>
      </li>
    </ul>
  );
}
