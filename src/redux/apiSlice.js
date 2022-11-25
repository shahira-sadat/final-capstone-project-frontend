import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const carsApi = createApi({
  reducerPath: 'carsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'waiting for api' }),
  endPoints: (builder) => ({
    getAllCars: builder.query({
      query: () => 'waiting for cars endpoint',
    }),
  }),
});

export const { useGetAllCarsQuery } = carsApi;
