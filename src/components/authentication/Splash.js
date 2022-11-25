import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import '../../assets/styles/Splash.css';

function Splash() {
  return (
    <div className="welcome">
      <h1>WELCOME TO RENTAL CARS</h1>
      <div className="buttons">
        <NavLink to="login" className="registration-page-nav-list-item">
          Log in
        </NavLink>
        <NavLink to="signup" className="registration-page-nav-list-item">
          Sign up
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}

export default Splash;
