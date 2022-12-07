import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

function Navbar() {
  return (
    <>
      <input type="checkbox" className="toggler" />
      <div className="hamburger" />
      <div className="menu">
        <div>
          <ul>
            <h2>Car Rental</h2>
            <img
              className="user-img"
              src="https://img.icons8.com/officel/100/null/gender-neutral-user.png"
              alt="User"
            />
            <li>
              <Link to="/cars" className="link">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/bookings" className="link">
                <p>Bookings</p>
              </Link>
            </li>
            <li>
              <Link to="/cars/create" className="link">
                <p>Create</p>
              </Link>
            </li>
            <li>
              <Link to="/details" className="link">
                <p>About us</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                <p>Profile Settings</p>
              </Link>
            </li>
            <li>
              <Link to="/" className="link">
                <p>Log out</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
