import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { postUser, setAuth, setRole } from '../../redux/users/users';
import '../../assets/styles/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { status } = useSelector((state) => state.users);
  const { users } = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const state = {
    user_name: username,
    password,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(postUser(state));
    if (status === 'success') {
      const { role } = users.user;
      setRole(role);
      setAuth(true);
      navigate('/cars');
    }
  };

  return (
    <form className="form-container login" onSubmit={submitHandler}>
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
      {status === 'error'
      && <span>Wrong combination username and password</span>}
    </form>
  );
}

export default Login;
