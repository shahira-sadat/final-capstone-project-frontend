import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { postBooking, setStatus } from '../../redux/bookings/bookings';
import '../../assets/styles/CarDetails.css';

const BookingCreate = () => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDateReturn, setBookingDateReturn] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  // const [bookingCar, setCar] = useState('');
  const { id } = useParams();
  const idToUse = Number(id);
  const { status } = useSelector((state) => state.bookings);

  const dispatch = useDispatch();
  const idUser = JSON.parse(localStorage.getItem('user')).id;
  let message = '';

  useEffect(() => {
    dispatch(setStatus());
  });

  if (status === 'success') {
    message = <h3>Booking Created</h3>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // setCar(idToUse);
    const data = {
      booking: {
        date: bookingDate,
        date_return: bookingDateReturn,
        city: bookingCity,
        car_id: idToUse,
      },
      user: {
        user_id: idUser,
      },

    };
    dispatch(postBooking(data));
  };

  const screen = (
    <form className="book-form" onSubmit={handleSubmit}>
      <div className="label">
        <span>From:</span>
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
      </div>

      <div className="label">
        <span>To:</span>
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
      </div>

      <label htmlFor="cities">
        City:
        {' '}
        <select
          value={bookingCity}
          onChange={(e) => setBookingCity(e.target.value)}
          id="cities"
        >
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
      {message}
    </form>
  );

  return screen;
};

export default BookingCreate;
