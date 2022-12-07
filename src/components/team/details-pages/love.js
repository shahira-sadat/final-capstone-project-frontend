import React from 'react';
import '../../../assets/styles/details-pages.css';
import Navbar from '../../navbar/Navbar';

function Love() {
  return (
    <>
      <Navbar />
      <div className="container-fluid vh-100 d-flex flex-column align-items-center text-center bg-image bg-image-love">
        <div className="mask vh-100 d-flex flex-column align-items-center text-center love">
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">The Love</h1>
              <hr />
              <h5 className="mb-4">
                Our Customers Love us For our Best Service
              </h5>
              <p>Great Service, Happy customers 😊</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Love;
