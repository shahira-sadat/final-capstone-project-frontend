import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { NavLink, Outlet } from 'react-router-dom';
import { deleteCar } from '../../redux/cars/cars';
import '../../assets/styles/CarDetails.css';
import Navbar from '../navbar/Navbar';

function CarDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.cars);
  const { status } = useSelector((state) => state.cars);
  // const { auth } = useSelector((state) => state.users);
  const { role } = useSelector((state) => state.users);
  const { id } = useParams();
  const car = cars.find((car) => car.carId === Number(id));
  let screen;

  const handleDelete = (e, id) => {
    e.preventDefault();
    navigate('/cars');
    dispatch(deleteCar(id));
  };

  if (status === 'success') {
    screen = (
      <>
        <Navbar />

        <section className="car-details-section">
          <div className="details-header">
            <div className="details-title">
              <h2>{car.carBrand}</h2>
              <h3>{car.carName}</h3>
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
            <img src={car.carImage} alt="car-img" />
          </div>

          <div className="details-footer">
            <div>
              <p>
                Color Available:
                {' '}
                {car.carColor}
                {' '}
              </p>
              <h3>
                Price per Day
                {' '}
                {car.carPrice}
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
}

export default CarDetails;
