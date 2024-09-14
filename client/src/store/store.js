import { configureStore } from '@reduxjs/toolkit';
import heroReducer from './heroSlice';
import popularCarsReducer from './popularCarsSlice';

export const store = configureStore({
    reducer: {
        hero: heroReducer,
        popularCars: popularCarsReducer,
    },
});

export default store;
