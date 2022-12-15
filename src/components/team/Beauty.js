import React from 'react';
import '../../assets/styles/details-pages.css';
import Navbar from '../navbar/Navbar';

const Beauty = () => (
  <>
    <Navbar />
    <div className="container-fluid vh-100 d-flex flex-column align-items-center text-center bg-image bg-image-beauty">
      <div className="mask vh-100 d-flex flex-column align-items-center text-center beauty">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">Beauty</h1>
            <hr />
            <h5 className="mb-4">
              If You are looking for the coolest cars, you are in the right place
            </h5>
            <p>Great Service, Happy customers 😊</p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Beauty;
