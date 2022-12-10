import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useSelector } from 'react-redux';
import CarCard from './CarCard';
import '../../assets/styles/Cars.css';
import Navbar from '../navbar/Navbar';

const Cars = () => {
  const { cars } = useSelector((state) => state.cars);

  const responsive = {
    superLargeDesktop: {
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

  const screen = (
    <>
      <Navbar />
      <section className="cars-section">
        <div className="cars-title">
          <h1>Latest Models</h1>
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
                id={car.id}
                img={car.image}
                name={car.car_name}
                brand={car.brand}
                price={car.price}
                color={car.color}
                booked={car.booked}
              />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );

  return screen;
};

export default Cars;
