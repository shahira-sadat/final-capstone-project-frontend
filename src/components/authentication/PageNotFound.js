import React from 'react';
import { NavLink } from 'react-router-dom';
import image from '../../assets/img/Astronaut-big.png';

function PageNotFound() {
  return (
    <div style={{
      width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '2rem', paddingTop: '3rem',
    }}
    >
      <img src={image} alt="img" style={{ width: '20%' }} />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <h1 style={{ color: 'var(--dark-gray)' }}>404 Error</h1>
        <h1>Page Not Found</h1>
        <NavLink to="/" style={{ textAlign: 'center' }}>Go Back to Home</NavLink>
      </div>
    </div>
  );
}

export default PageNotFound;
