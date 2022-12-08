import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { getCars, deleteCar } from '../../redux/cars/cars';
import '../../assets/styles/CarDetails.css';
import Navbar from '../navbar/Navbar';

function CarDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.cars);
  const { auth } = useSelector((state) => state.users);
  const { role } = useSelector((state) => state.users);
  const { id } = useParams();
  const car = cars.find((car) => car.carId === Number(id));

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleDelete = (e, id) => {
    e.preventDefault();
    navigate('/cars');
    dispatch(deleteCar(id));
  };

  const screen = (
    <>
      <Navbar />

      <section className="car-details-section">
        <div className="details-header">
          <div className="details-title">
            <h2>{car.carBrand}</h2>
            <h3>{car.carName}</h3>
          </div>

          {role === 'user' && (
          <Link to="/bookings/create" className="link">
            <p>Book this Car</p>
          </Link>
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
      </section>
    </>
  );

  return auth ? screen : <h1>You are not logged</h1>;
}

export default CarDetails;
