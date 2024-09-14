import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
import popularCarsReducer from './popularCarsSlice';
import recommendedCarsReducer from './recommendedCarsSlice';

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        popularCars: popularCarsReducer,
        recommendedCars: recommendedCarsReducer,
    },
});

export default store;
