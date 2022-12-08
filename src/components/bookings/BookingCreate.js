import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { postBooking } from '../../redux/bookings/bookings';
import Navbar from '../navbar/Navbar';
import { getCars } from '../../redux/cars/cars';

function CarCreate() {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingDateReturn, setBookingDateReturn] = useState('');
  const [bookingCity, setBookingCity] = useState('');
  const [bookingCar, setCar] = useState('');
  const { id } = useParams();
  const idToUse = Number(id);
  const { auth } = useSelector((state) => state.users);
  const userId = useSelector((state) => state.users.id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setCar(idToUse);
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      date: bookingDate,
      date_return: bookingDateReturn,
      city: bookingCity,
      car_id: bookingCar,
      user_id: userId,
    };
    dispatch(postBooking(bookingData));
    navigate('/cars');
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
              <option value="paris">Paris</option>
              <option value="tokio">Tokio</option>
              <option value="madrid">Madrid</option>
              <option value="toronto">Toronto</option>
              <option value="sidney">Sidney</option>
              <option value="boston">Boston</option>
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
