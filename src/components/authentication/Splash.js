import React from 'react';
import { NavLink } from 'react-router-dom';

function Splash() {
  return (
    <div className="welcome">
      <h1>Welcome to Inter Rent</h1>
      <div className="buttons">
        <NavLink to="login" className="registration-page-nav-list-item">
          Log in
        </NavLink>
        <NavLink to="signup" className="registration-page-nav-list-item">
          Sign up
        </NavLink>
      </div>
    </div>
  );
}

export default Splash;
