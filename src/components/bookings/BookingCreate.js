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
    dispatch(postBooking(bookingData));
    navigate('/cars');
  };

  const screen = (
    <>
      <Navbar />
      <section className="create-section">
        <h1>Book this Car </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <label htmlFor="date">
            From
            {' '}
            <input
              id="date"
              type="date"
              placeholder="Brand"
              name="bookingDateReturn"
              className="form-input"
              value={bookingDateReturn}
              onChange={(e) => setBookingDateReturn(e.target.value)}
              required
            />
          </label>

          <label htmlFor="date-return">
            To:
            {' '}
            <input
              id="date-return"
              type="date"
              placeholder="Model"
              name="bookingDate"
              className="form-input"
              value={bookingDate}
              onChange={(e) => setBookingDate(e.target.value)}
              required
            />
          </label>

          <label htmlFor="cities">
            Where you want to book this car?
            {' '}
            <select value={bookingCity} onChange={(e) => setBookingCity(e.target.value)} id="cities">
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>

          <label htmlFor="cars">
            Pick the car you want to book:
            {' '}
            <select value={bookingCar} onChange={(e) => setCar(e.target.value)} id="cars">
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <button type="submit" className="form-button button">
            Book
          </button>
        </form>
      </section>
    </>
  );

  return auth ? screen : <h1>You are not logged</h1>;
}

export default CarCreate;
