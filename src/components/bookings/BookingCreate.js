import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
import '../../assets/styles/BookingCreate.css';

function BookingCreate() {
  const [username, setUsername] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();
  const authenticated = false; // useSelector((state) => state.BookingCreate.authenticated);

  useEffect(() => {
    if (authenticated) {
      navigate('/cars');
    }
  }, [navigate, authenticated]);

  //   state = {
  //     username,
  // password
  //   };

  const submitHandler = (e) => {
    // dispatch(BookingCreate(state));
    e.preventDefault();
  };

  return (
    <form className="form-container BookingCreate" onSubmit={submitHandler}>
      <input
        type="text"
        placeholder="Username"
        name="username"
        className="form-input"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <input
        type="password"
        name="password"
        id="password"
        className="form-input"
        placeholder="Password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="form-button button">
        Log In
      </button>
    </form>
  );
}

export default BookingCreate;
