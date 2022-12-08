import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/styles/CarCard.css';

function CarCard(props) {
  const {
    id, img, name, carBrand, carPrice, carColor, carBooked,
  } = props;

  const carDetailsLink = `/cars/${id}`;

  return (
    <Link to={carDetailsLink} id={id} className="card-link">
      <div className="card-content">
        <img className="car-img" src={img} alt={name} />
        <div className="car-info">
          <h2 className="">{carBrand}</h2>
          <div className="car-features">
            <h3>
              {' '}
              {name}
            </h3>
            <p>
              Color:
              {' '}
              {carColor}
            </p>
          </div>
          {/* {!deleteCar && <p className="">{carType}</p>}
          {reservation && (
            <div className="">
              <p>{reservationDate}</p>
            </div>
          )} */}
          {/* {!reservation && !deleteCar && (
            <p className="">
              $
              {carPrice}
              /day
            </p>
          )} */}
          <div className="car-price">
            <h4>
              {carPrice}
              $ Daily
            </h4>
          </div>
          <div className="car-options">
            <p>{!carBooked ? 'Available' : 'Not available'}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CarCard;

CarCard.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  carColor: PropTypes.string.isRequired,
  carBrand: PropTypes.string.isRequired,
  carPrice: PropTypes.string.isRequired,
  carBooked: PropTypes.bool,
};

CarCard.defaultProps = {
  // reservationDate: String(Date.now()),
  carBooked: false,
  // deleteCar: false,
};
