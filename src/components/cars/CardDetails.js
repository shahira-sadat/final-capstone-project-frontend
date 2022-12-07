import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Navbar from '../navbar/Navbar';
import CarCard from './CarCard';

function CarDetail(props) {
  const { cars } = useSelector((state) => state.cars);
  const { id } = props;
  const car = cars.find((car) => car.id === id);

  return (
    <>
      <Navbar />
      <div className="card-content">
        <h1>Car Detail</h1>
        <CarCard
          key={car.id}
          id={car.id}
          img={car.image}
          name={car.model_name}
          carBrand={car.brand}
          carPrice={car.price}
          carColor={car.color}
          carBooked={car.booked}
        />
        <h1>{id}</h1>
      </div>
    </>
  );
}

CarDetail.propTypes = {
  id: PropTypes.number.isRequired,
};

export default CarDetail;
