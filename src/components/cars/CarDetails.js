import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { deleteCar } from '../../redux/cars/cars';
import '../../assets/styles/CarDetails.css';
import Navbar from '../navbar/Navbar';
import BookingCreate from '../bookings/BookingCreate';

const CarDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { cars } = useSelector((state) => state.cars);
  const { status } = useSelector((state) => state.cars);
  const car = cars.find((car) => car.id === Number(id));
  const { role } = JSON.parse(localStorage.getItem('user'));
  let screen;

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteCar(id));
    if (status === 'success') {
      navigate('/cars');
    }
  };

  if (status === 'success') {
    screen = (
      <>
        <Navbar />

        <section className="car-details-section">
          <div className="details-img">
            <img src={car.image} alt="car-img" />
          </div>

          <div className="details-info">
            <h2>{car.brand}</h2>
            <h3>{car.car_name}</h3>
            <h3>{car.year}</h3>
            <div>
              <p>
                Color Available:
                {' '}
                {car.color}
                {' '}
              </p>
              <h3 className="price">
                Daily Fee:
                {' '}
                {car.price}
                $
              </h3>
            </div>
          </div>

          <div className="details-buttons-form">
            {role === 'admin' && (
              <div className="details-buttons">
                {' '}
                <button
                  className="button delete"
                  type="button"
                  onClick={(e) => handleDelete(e, id)}
                >
                  Delete Car
                </button>
                <button
                  className="button delete"
                  type="button"
                  onClick={() => navigate(`/cars/${id}/update`)}
                >
                  Update Car
                </button>
              </div>
            )}

            {role === 'user' && (
            <>
              {' '}
              <h2>Book this Car </h2>
              {' '}
              <BookingCreate />
            </>
            )}
          </div>
        </section>
      </>
    );
  } else {
    screen = (
      <h3>
        {status}
        ...
      </h3>
    );
  }
  return screen;
};

export default CarDetails;
