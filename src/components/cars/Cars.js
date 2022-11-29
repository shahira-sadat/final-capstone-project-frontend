import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';
import '../../assets/styles/Cars.css';

function Cars() {
  // const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);

  return (
    <div className="">
      <div className="">
        <h1 className="">Cars Available.</h1>
        <p className="">Select the car you want to reserve.</p>
      </div>
      <Carousel responsive={responsive} showDots>
        {cars.map((car) => (
          <div key={car.id} className="car-card">
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
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Cars;
