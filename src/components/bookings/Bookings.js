import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { getBookings } from '../../redux/bookings/bookings';

const Bookings = () => {
  const dispatch = useDispatch();
  const { bookings } = useSelector((state) => state.bookings);
  const { cars } = useSelector((state) => state.cars);
  const { id } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    dispatch(getBookings(id));
  }, [dispatch, id]);

  return (
    <>
      <Navbar />
      <section>
        <h1>These are all Your Bookings</h1>
        <ul>
          {bookings.map((booking) => (
            <li key={booking.bookingId}>
              <h1>
                {cars.find((car) => car.id === booking.bookingCarId).brand}
                ,
                {' '}
                {cars.find((car) => car.id === booking.bookingCarId).name}
              </h1>
              <h2>
                {' '}
                {cars.find((car) => car.id === booking.bookingCarId).color}
                ,
                {' '}
                {cars.find((car) => car.id === booking.bookingCarId).year}

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
                {cars.find((car) => car.id === booking.bookingCarId).price}
                {' '}
                $
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
export default Bookings;
