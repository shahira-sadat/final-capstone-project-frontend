import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postCar, getCars } from '../../redux/cars/cars';
import '../../assets/styles/CarCreate.css';
import Navbar from '../navbar/Navbar';

function CarUpdate() {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carImage, setCarImage] = useState('');
  const { auth } = useSelector((state) => state.users);
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();
  const car = cars.find((car) => car.carId === Number(id));

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const carData = {
      car_name: carName,
      brand: carBrand,
      color: carColor,
      year: carYear,
      price: carPrice,
      image: carImage,
    };
    dispatch(postCar(carData));
    navigate('/cars');
  };

  const screen = (
    <>
      <Navbar />
      <section className="create-section">
        <h1>Create a Car </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Brand"
            name="carBrand"
            className="form-input"
            value={carBrand}
            onChange={(e) => setCarBrand(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Model"
            name="carName"
            className="form-input"
            value={car.carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image link"
            name="carImage"
            className="form-input"
            value={car.carImage}
            onChange={(e) => setCarImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Color"
            name="carColor"
            className="form-input"
            value={car.carColor}
            onChange={(e) => setCarColor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Year"
            name="carYear"
            className="form-input"
            value={car.carYear}
            onChange={(e) => setCarYear(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            name="carPrice"
            className="form-input"
            value={car.carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Create Car
          </button>
        </form>
      </section>
    </>
  );

  return auth ? screen : <h1>You are not logged</h1>;
}

export default CarUpdate;
