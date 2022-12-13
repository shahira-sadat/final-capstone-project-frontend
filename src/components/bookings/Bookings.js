import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../navbar/Navbar';
import { getBookings } from '../../redux/bookings/bookings';
import '../../assets/styles/Bookings.css';

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
      <section className="bookings">
        <h1>BOOKINGS</h1>
        <table className="bookings-list">
          <thead>
            <tr>
              <th>CAR</th>
              <th>COLOR</th>
              <th>YEAR</th>
              <th>CITY</th>
              <th>FROM</th>
              <th>TO</th>
              <th>DAILY FEE</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.bookingId}>
                <td>
                  {cars.find((car) => car.id === booking.bookingCarId).brand}
                  ,
                  {' '}
                  {cars.find((car) => car.id === booking.bookingCarId).car_name}
                </td>
                <td>{cars.find((car) => car.id === booking.bookingCarId).color}</td>
                <td>{cars.find((car) => car.id === booking.bookingCarId).year}</td>
                <td>{booking.bookingCity}</td>
                <td>{new Date(booking.bookingDate).toDateString()}</td>
                <td>{new Date(booking.bookingDateReturn).toDateString()}</td>
                <td>
                  {cars.find((car) => car.id === booking.bookingCarId).price}
                  {' '}
                  $
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};
export default Bookings;
