import { createSlice } from '@reduxjs/toolkit';

export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [
      {
        brand: 'Kia',
        id: 1,
        model_name: 'Sorento',
        color: 'Orange',
        booked: false,
        image: 'https://s3.amazonaws.com/www.autowise.com/wp-content/uploads/2019/01/30161509/kia-stinger-2.jpg',
        price: 150,
      },
      {
        brand: 'Ford',
        id: 2,
        model_name: 'Mondeo',
        color: 'Red',
        booked: false,
        image: 'https://autotest.com.ar/wp-content/uploads/2022/03/Ford-Mondeo-frente.jpg',
        price: 190,
      },
      {
        brand: 'Toyota',
        id: 3,
        model_name: 'Corolla',
        color: 'White',
        booked: false,
        image: 'https://lasillarota.com/u/fotografias/m/2022/10/14/f804x452-359389_411322_31.jpeg',
        price: 200,
      },
      {
        brand: 'Chevrolet',
        id: 4,
        model_name: 'Seeker',
        color: 'Green',
        booked: false,
        image: 'https://www.autoweb.com.ar/wp-content/uploads/2022/10/chevrolet_trax_activ_1_03f001ec0e340a4a.jpg',
        price: 220,
      },
      {
        brand: 'Volkswagen',
        id: 5,
        model_name: 'Jetta GLI',
        color: 'Red',
        booked: false,
        image: 'https://girodosmotores.com/wp-content/uploads/2022/04/volkswagen-apresenta-o-novo-jetta-gli-2023-01-1024x647.jpg',
        price: 170,
      },
      {
        brand: 'Hyundai',
        id: 6,
        model_name: 'Sonata',
        color: 'Yellow',
        booked: false,
        image: 'https://cdn.carbase.com/dealer/harrisonburghonda/5115574_158939601_640.jpg',
        price: 180,
      },
    ],
    status: null,
  },
  reducers: {
    carsReducer: (state, action) => {
      const newState = state.cars.map((car) => {
        const { reserved } = car;
        if (car.carId !== action.payload) {
          return car;
        }
        return { ...car, reserved: !reserved };
      });
      return { ...state, cars: newState };
    },
  },
//   extraReducers: {
//     [getcars.pending]: (state) => {
//       state.status = 'loading';
//     },
//     [getcars.fulfilled]: (state, action) => {
//       const cars = action.payload.map((car) => {
//         const {
//           id: carId,
//           car_name: carName,
//           description: carDescription,
//           flickr_images: carImage,
//         } = car;
//         return {
//           carId,
//           carName,
//           carDescription,
//           carImage,
//           reserved: false,
//         };
//       });
//       state.cars = cars;
//       state.status = 'success';
//     },
//     [getcars.rejected]: (state) => {
//       state.status = 'failed';
//     },
//   },
});

export const { carsReducer } = carsSlice.actions;

export default carsSlice.reducer;
