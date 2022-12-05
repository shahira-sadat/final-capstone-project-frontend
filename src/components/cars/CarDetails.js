import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import CarCard from './CarCard';
// import { getCars } from '../../redux/cars/cars';

function CarDetails() {
//   const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();

  console.log(id);

  const car = cars.find((car) => car.carId === Number(id));

  console.log(car);

  //   useEffect(() => {
  //     dispatch(getCars());
  //   }, [dispatch]);

  return (
    <CarCard
      key={car.carId}
      id={car.carId}
      img={car.carImage}
      name={car.carName}
      carBrand={car.carBrand}
      carPrice={car.carPrice}
      carColor={car.carColor}
      carBooked={car.carBooked}
    />
  );
}

export default CarDetails;
