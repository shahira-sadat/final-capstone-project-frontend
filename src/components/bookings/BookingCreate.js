import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { postBooking } from '../../redux/bookings/bookings';
import '../../assets/styles/CarCreate.css';
import Navbar from '../navbar/Navbar';

function CarCreate() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDateReturn, setBookingDateReturn] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  const [bookingCar, setCar] = useState('');

  const { auth } = useSelector((state) => state.users);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      date: bookingDate,
      date_return: bookingDateReturn,
      city: bookingCity,
      car_id: bookingCar,
    };
    dispatch(postCar(bookingCar));
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
            name="bookingDateReturn"
            className="form-input"
            value={bookingDateReturn}
            onChange={(e) => setbookingDateReturn(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Model"
            name="bookingDate"
            className="form-input"
            value={bookingDate}
            onChange={(e) => setbookingDate(e.target.value)}
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
            name="bookingCity"
            className="form-input"
            value={bookingCity}
            onChange={(e) => setbookingCity(e.target.value)}
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
      </section>
    </>
  );

  return auth ? screen : <h1>You are not logged</h1>;
}

export default CarCreate;
