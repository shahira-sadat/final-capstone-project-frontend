import React from 'react';
// import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../../assets/styles/CarCard.css';

function CarCard(props) {
  // const dispatch = useDispatch();
  // const location = useLocation();

  const {
    id, img, name, carBrand, carPrice, carColor, carBooked,
  } = props;

  const reservationLink = `/cars/reservation/${id}`;

  // const handleDelete = (e, id) => {
  //   e.preventDefault();
  //   location.state = {};
  //   // dispatch(deleteCars(id));
  // };

  return (
    <Link to={reservationLink} className="card-link">
      <div className="card-content">
        <img className="car-img" src={img} alt={name} />
        <div className="car-info">
          <h2 className="">{carBrand}</h2>
          <h3>
            {' '}
            {name}
          </h3>
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
          {/* {deleteCar && (
            <button
              className=""
              type="button"
              onClick={(e) => handleDelete(e, id)}
            >
              Delete Car
            </button>
          )} */}

          <div className="car-price">
            <h4>
              {carPrice}
              $ Daily
            </h4>
          </div>
          <div className="car-options">
            <p>
              Color:
              {' '}
              {carColor}
            </p>
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
  carPrice: PropTypes.number.isRequired,
  carBooked: PropTypes.bool,
};

CarCard.defaultProps = {
  // reservationDate: String(Date.now()),
  carBooked: false,
  // deleteCar: false,
};
