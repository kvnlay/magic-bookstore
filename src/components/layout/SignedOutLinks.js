import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function SignedOutLinks() {
  return (
    <div className="panel-icon">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
    </div>
  );
}
