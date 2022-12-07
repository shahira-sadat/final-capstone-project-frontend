import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import '../../assets/styles/EditUser.css';

function EditUser() {
  const authenticated = true; // useSelector((state) => state.signup.authenticated);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    if (authenticated) {
      navigate('/edit');
    }
  }, [navigate, authenticated]);

  //   const state = {
  //     name,
  //     username,
  //     email,
  //     password,
  //     admin: false,
  //   };

  const submitHandler = (e) => {
    e.preventDefault();
    // dispatch(signup(state));
  };
  return (
    <>
      <Navbar />
      <div className="edit-user-container">
        <h1>Settings</h1>
        <form className="form-container edit-user" onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Edit Username"
            name="username"
            className="form-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Full Name"
            name="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <h5>You need to type your current password to change the password</h5>

          <input
            type="password"
            placeholder="Current Password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Create a New Password"
            name="password"
            className="form-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new Password"
            name="password"
            className="form-input"
            value={passwordConfirmation}
            onChange={(e) => setPasswordConfirmation(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Update
          </button>
        </form>
      </div>
    </>
  );
}

export default EditUser;
