import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Navbar.css';

const Navbar = () => {
  const { role } = JSON.parse(localStorage.getItem('user'));
  const { photo } = JSON.parse(localStorage.getItem('user'));
  const { name } = JSON.parse(localStorage.getItem('user'));
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
              src={photo}
              alt="https://img.icons8.com/officel/100/null/gender-neutral-user.png"
            />
            <h3>{name}</h3>
            <li>
              <Link to="/cars" className="link">
                <p>Home</p>
              </Link>
            </li>
            {role === 'user' && (
              <li>
                <Link to="/bookings" className="link">
                  <p>Bookings</p>
                </Link>
              </li>
            )}

            {role === 'admin' && (
              <li>
                <Link to="/cars/create" className="link">
                  <p>Create</p>
                </Link>
              </li>
            )}

            <li>
              <Link to="/details" className="link">
                <p>About us</p>
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
};

export default Navbar;
