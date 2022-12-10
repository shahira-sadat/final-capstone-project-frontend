import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postBooking } from '../../redux/bookings/bookings';
import Navbar from '../navbar/Navbar';

const CarCreate = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDateReturn, setBookingDateReturn] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  const [bookingCar, setCar] = useState('');
  const { id } = useParams();
  const idToUse = Number(id);
  const { auth } = useSelector((state) => state.users);
  const { status } = useSelector((state) => state.bookings);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const idUser = JSON.parse(localStorage.getItem('auth')).id;

  if (status === 'success') {
    navigate('/bookings');
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setCar(idToUse);
    const bookingData = {
      date: bookingDate,
      date_return: bookingDateReturn,
      city: bookingCity,
      car_id: bookingCar,
      user_id: idUser,
    };
    dispatch(postBooking(bookingData));
  };

  const screen = (
    <>
      <Navbar />
      <section>
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

          {/* <label htmlFor="cities">
            Where you want to book this car?
            {' '}
            <select value={bookingCity} onChange={(e) =>
              setBookingCity(e.target.value)} id="cities">
              {cars.map((car) => (
                <option key={car.carId} value={cars.carId}>
                  {car.carBrand}
                  ,
                  {' '}
                  {car.carName}
                </option>
              ))}
            </select>
          </label> */}

          <label htmlFor="cities">
            Where you want to book this car?
            {' '}
            <select value={bookingCity} onChange={(e) => setBookingCity(e.target.value)} id="cities">
              <option value="Paris">Paris</option>
              <option value="Tokio">Tokio</option>
              <option value="Madrid">Madrid</option>
              <option value="Toronto">Toronto</option>
              <option value="Sidney">Sidney</option>
              <option value="Boston">Boston</option>
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
};

export default CarCreate;
