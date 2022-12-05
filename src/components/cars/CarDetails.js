import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router';
// import CarCard from './CarCard';
// import { getCars } from '../../redux/cars/cars';
import { deleteCar } from '../../redux/cars/cars';

function CarDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();

  console.log(id);

  const car = cars.find((car) => car.carId === Number(id));

  console.log(car);

  const handleDelete = (e, id) => {
    e.preventDefault();
    navigate('/cars');
    dispatch(deleteCar(id));
  };

  //   useEffect(() => {
  //     dispatch(getCars());
  //   }, [dispatch]);

  //   key={car.carId}
  //       id={car.carId}
  //       img={car.carImage}
  //       name={car.carName}
  //       carBrand={car.carBrand}
  //       carPrice={car.carPrice}
  //       carColor={car.carColor}
  //       carBooked={car.carBooked}

  return (
    <section>
      <div>
        <img src={car.carImage} alt="car-img" />
      </div>
      <div>
        <h2>{car.carBrand}</h2>
        <h3>{car.carName}</h3>
      </div>
      <div>
        <p>
          {car.carColor}
          {' '}
        </p>
        <h3>{car.carPrice}</h3>
      </div>
      <div>
        <button
          className=""
          type="button"
          onClick={(e) => handleDelete(e, id)}
        >
          Delete Car
        </button>
      </div>
    </section>
  );
}

export default CarDetails;
