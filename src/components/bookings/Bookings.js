import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { getBookings } from '../../redux/bookings/bookings';
import { getCars } from '../../redux/cars/cars';

function Bookings() {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const { cars } = useSelector((state) => state.cars);
  const idUser = JSON.parse(localStorage.getItem('auth')).id;

  useEffect(() => {
    dispatch(getBookings(idUser));
    dispatch(getCars());
  }, [dispatch, idUser]);

  return (
    <>
      <Navbar />
      <section>
        <h1>These are all Your Bookings</h1>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.bookingId}>
              <h1>
                {cars.find((car) => car.carId === booking.bookingCarId).carBrand}
                ,
                {' '}
                {cars.find((car) => car.carId === booking.bookingCarId).carName}
              </h1>
              <h2>
                {' '}
                {cars.find((car) => car.carId === booking.bookingCarId).carColor}
                ,
                {' '}
                {cars.find((car) => car.carId === booking.bookingCarId).carYear}

              </h2>
              <h3>
                Booked in:
                {' '}
                {booking.bookingCity}
              </h3>
              <p>
                From:
                {' '}
                {new Date(booking.bookingDate).toDateString()}
              </p>
              <p>
                To:
                {' '}
                {new Date(booking.bookingDateReturn).toDateString()}
              </p>
              <p>
                Daily Fee:
                {' '}
                {cars.find((car) => car.carId === booking.bookingCarId).carPrice}
                {' '}
                $
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
export default Bookings;
