import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Nav = () => (
  <div className="panel">
    <div className="menu">
      <h1 className="logo">Bookstore CMS</h1>
    </div>
    <div className="panel-icon">
      <FontAwesomeIcon icon={faUser} className="profile-icon" />
    </div>
  </div>
);

export default Nav;
