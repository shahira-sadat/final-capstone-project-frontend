import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { NavLink, Outlet } from 'react-router-dom';
import { deleteCar } from '../../redux/cars/cars';
import '../../assets/styles/CarDetails.css';
import Navbar from '../navbar/Navbar';

const CarDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { cars } = useSelector((state) => state.cars);
  const { status } = useSelector((state) => state.cars);
  const car = cars.find((car) => car.id === Number(id));
  let screen;

  const handleDelete = (e, id) => {
    e.preventDefault();
    dispatch(deleteCar(id));
    if (status === 'success') {
      navigate('/cars');
    }
  };

  const { role } = JSON.parse(localStorage.getItem('user'));
  if (status === 'success') {
    screen = (
      <>
        <Navbar />

        <section className="car-details-section">
          <div className="details-header">
            <div className="details-title">
              <h2>{car.brand}</h2>
              <h3>{car.car_name}</h3>
            </div>

            {role === 'user' && (
              <NavLink to="book" className="link">
                <p>Book this Car</p>
              </NavLink>
            )}

            {role === 'admin' && (
              <div>
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
          </div>

          <div className="details-img">
            <img src={car.image} alt="car-img" />
          </div>

          <div className="details-footer">
            <div>
              <p>
                Color Available:
                {' '}
                {car.color}
                {' '}
              </p>
              <h3>
                Price per Day
                {' '}
                {car.price}
                $
              </h3>
            </div>
          </div>
          <Outlet />
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
