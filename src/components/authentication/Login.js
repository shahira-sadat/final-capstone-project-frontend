import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';

function Login() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const authenticated = false; // useSelector((state) => state.login.authenticated);

  useEffect(() => {
    if (authenticated) {
      navigate('/cars');
    }
  }, [navigate, authenticated]);

  //   state = {
  //     username,
  //   };

  const submitHandler = (e) => {
    // dispatch(login(state));
    e.preventDefault();
  };

  return (
    <>
      <h1>Form to Login</h1>
      <form className="form-container" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          className="form-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <button type="submit" className="form-button button">
          Log In
        </button>
      </form>
    </>
  );
}

export default Login;
