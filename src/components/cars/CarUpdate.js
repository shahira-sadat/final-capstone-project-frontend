import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateCar, getCars } from '../../redux/cars/cars';
import '../../assets/styles/CarCreate.css';
import Navbar from '../navbar/Navbar';

const CarUpdate = () => {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carImage, setCarImage] = useState('');
  const { auth } = useSelector((state) => state.users);
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();
  const idToUse = Number(id);
  const car = cars.find((car) => car.carId === idToUse);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      id: idToUse,
      car_name: carName,
      brand: carBrand,
      color: carColor,
      year: carYear,
      price: carPrice,
      image: carImage,
    };
    dispatch(updateCar(carData));
    navigate('/cars');
  };

  const screen = (
    <>
      <Navbar />
      <section className="create-section">
        <h1>
          Update
          {' '}
          {car.carName}
          {' '}
        </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={car.carBrand}
            name="carBrand"
            className="form-input"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={car.carName}
            name="carName"
            className="form-input"
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={car.carImage}
            name="carImage"
            className="form-input"
            value={carImage}
            onChange={(e) => setCarImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder={car.carColor}
            name="carColor"
            className="form-input"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder={car.carYear}
            name="carYear"
            className="form-input"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder={car.carPrice}
            name="carPrice"
            className="form-input"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Update
          </button>
        </form>
      </section>
    </>
  );

  return auth ? screen : <h1>You are not logged</h1>;
};

export default CarUpdate;
