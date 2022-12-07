import React from 'react';
import '../../../assets/styles/details-pages.css';
import Navbar from '../../navbar/Navbar';

function Quality() {
  return (
    <>
      <Navbar />
      <div className="container-fluid vh-100 d-flex flex-column align-items-center text-center bg-image bg-image-quality">
        <div className="mask vh-100 d-flex flex-column align-items-center text-center quality">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Quality</h1>
              <hr />
              <h5 className="mb-4">
                We are really good at focusing on what customers need and require
              </h5>
              <p>Great Service, Happy customers 😊</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Quality;
