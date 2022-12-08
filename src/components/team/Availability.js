import React from 'react';
import '../../../assets/styles/details-pages.css';
import Navbar from '../navbar/Navbar';

function Availability() {
  return (
    <>
      <Navbar />
      <div className="container-fluid vh-100 d-flex flex-column align-items-center text-center bg-image bg-image-availibility">
        <div className="mask vh-100 d-flex flex-column align-items-center text-center availibility">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Availability</h1>
              <hr />
              <h5 className="mb-4">
                We are Always available for offering the best service
              </h5>
              <p>Happy employees, Happy customers 😊</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Availability;
