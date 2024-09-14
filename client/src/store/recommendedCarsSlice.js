import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Strapi'den recommended cars verisini çekmek için createAsyncThunk
export const fetchRecommendedCars = createAsyncThunk('cars/fetchRecommendedCars', async () => {
    const response = await axios.get('http://localhost:1337/api/recommended-cars?populate=*');
    return response.data.data;
});

const recommendedCarsSlice = createSlice({
    name: 'recommendedCars',
    initialState: {
        recommendedCars: [],
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRecommendedCars.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchRecommendedCars.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.recommendedCars = action.payload;
            })
            .addCase(fetchRecommendedCars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default recommendedCarsSlice.reducer;
