import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
import { getCars, deleteCar } from '../../redux/cars/cars';
import '../../assets/styles/CarDetails.css';
import Navbar from '../navbar/Navbar';

function CarDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.cars);
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

  return (
    <>
      <Navbar />

      <section className="car-details-section">
        <div className="details-title">
          <h2>{car.carBrand}</h2>
          <h3>{car.carName}</h3>
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
          <div className="details-buttons">
            <button type="button" className="button">
              {' '}
              Reserve this Car
            </button>
            <button
              className="button delete"
              type="button"
              onClick={(e) => handleDelete(e, id)}
            >
              Delete Car
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarDetails;
