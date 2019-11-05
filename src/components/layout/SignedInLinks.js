import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { signOutAction } from "../../actions/authActions";
import { connect } from "react-redux";

function SignedInLinks({ signOut }) {
  return (
    <div className="panel-icon">
      <p onClick={signOut}>Sign Out</p>
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
    </div>
  );
}

export default connect(
  null,
  { signOut: signOutAction }
)(SignedInLinks);
