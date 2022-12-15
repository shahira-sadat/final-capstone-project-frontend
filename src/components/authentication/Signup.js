import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { signUpUser } from '../../redux/users/users';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.users);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [photo, setPhoto] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');

  useEffect(() => {
    if (status === 'success') {
      setTimeout(() => { navigate('/login'); }, 3000);
    }
  }, [navigate, status]);

  const state = {
    user: {
      name,
      user_name: username,
      email,
      password,
      password_confirmation: passwordConfirmation,
      photo,
      date_of_birth: birthday,
    },
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signUpUser(state));
  };

  return (
    <form className="form-container signup" onSubmit={submitHandler}>
      {status === 'loading' && (<h3>Loading</h3>)}
      {status === 'success' && (<h3>User created successfully</h3>)}
      <input
        type="text"
        placeholder="Create an Username"
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

      <label htmlFor="birthday">
        Birthday
        {' '}
        <input
          type="date"
          placeholder="Birthday"
          name="birthday"
          className="form-input"
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          required
        />
      </label>

      <input
        type="text"
        placeholder="Email"
        name="email"
        className="form-input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Photo Link"
        name="photo"
        className="form-input"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Create a Password"
        name="password"
        className="form-input"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Repeat Password"
        name="password"
        className="form-input"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        required
      />
      <button type="submit" className="form-button button">
        Next
      </button>
    </form>
  );
};

export default Signup;
