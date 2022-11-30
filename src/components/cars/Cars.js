import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';
import '../../assets/styles/Cars.css';
import Navbar from '../navbar/Navbar';

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
    <>
      <Navbar />
      <section className="cars-section">
        <div className="cars-title">
          <h1>CARS FOR RENTAL</h1>
          <p>Select the car you want to reserve.</p>
        </div>
        <Carousel
          autoPlay
          keyBoardControl
          responsive={responsive}
          showDots
          infinite
          removeArrowOnDeviceType={['tablet', 'mobile']}
        >
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
      </section>
    </>
  );
}

export default Cars;
