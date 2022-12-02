import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Details.css';
import carimage1 from '../../assets/img/3.jpg';
import carimage2 from '../../assets/img/2.jpg';
import carimage3 from '../../assets/img/meet.jpg';
import carimage4 from '../../assets/img/5.jpg';
import carimage5 from '../../assets/img/7.jpg';
import Navbar from '../navbar/Navbar';

function Details() {
  return (
    <>
      <Navbar />
      <div className="w-100 vh-100">
        <div className="container w-75 detailsbody">
          <div className="row w-100">
            <div className="col-md-4 p-0">
              <img src={carimage1} alt="car" className="w-100" />
            </div>
            <div className="col-md-4 bg-success">
              <Link to="/quality" className="link">
                <p className="p-details">Quality</p>
              </Link>
            </div>
            <div className="col-md-4 p-0">
              <img src={carimage2} alt="car" className="w-100" />
            </div>
          </div>
          <div className="row w-100">
            <div className="col-md-4 bg-warning">
              <Link to="/love" className="link">
                <p className="p-details">Love</p>
              </Link>
            </div>
            <div className="col-md-4 p-0">
              <Link to="/teams" className="link">
                <img src={carimage3} alt="car" className="w-100" />
              </Link>
            </div>
            <div className="col-md-4 bg-dark">
              <Link to="/availibility" className="link">
                <p className="p-details">Availibility</p>
              </Link>
            </div>
          </div>
          <div className="row w-100">
            <div className="col-md-4 p-0">
              <img src={carimage4} alt="car" className="w-100" />
            </div>
            <div className="col-md-4 bg-info">
              <Link to="/beauty" className="link">
                <p className="p-details">Beauty</p>
              </Link>
            </div>
            <div className="col-md-4 p-0">
              <img src={carimage5} alt="car" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
