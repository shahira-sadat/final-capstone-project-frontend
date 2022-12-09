import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postCar, getCars } from '../../redux/cars/cars';
import '../../assets/styles/CarCreate.css';
import Navbar from '../navbar/Navbar';

function CarCreate() {
  const [carName, setCarName] = useState('');
  const [carBrand, setCarBrand] = useState('');
  const [carColor, setCarColor] = useState('');
  const [carYear, setCarYear] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [carImage, setCarImage] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.cars);

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
    if (status === 'success') {
      setMessage(<h3>Car Created Successfully</h3>);
      dispatch(getCars());
    }
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
            value={carName}
            onChange={(e) => setCarName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image link"
            name="carImage"
            className="form-input"
            value={carImage}
            onChange={(e) => setCarImage(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Color"
            name="carColor"
            className="form-input"
            value={carColor}
            onChange={(e) => setCarColor(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Year"
            name="carYear"
            className="form-input"
            value={carYear}
            onChange={(e) => setCarYear(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Price"
            name="carPrice"
            className="form-input"
            value={carPrice}
            onChange={(e) => setCarPrice(e.target.value)}
            required
          />
          <button type="submit" className="form-button button">
            Create Car
          </button>
        </form>
        {message}
      </section>
    </>
  );

  return screen;
}

export default CarCreate;
