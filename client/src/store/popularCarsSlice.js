import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Strapi'den popular car verilerini çekmek için createAsyncThunk
export const fetchPopularCars = createAsyncThunk('cars/fetchPopularCars', async () => {
    const response = await axios.get('http://localhost:1337/api/popular-cars?populate=*');
    return response.data.data;
});

const popularCarsSlice = createSlice({
    name: 'popularCars',
    initialState: {
        popularCars: [],
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularCars.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPopularCars.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.popularCars = action.payload;
            })
            .addCase(fetchPopularCars.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default popularCarsSlice.reducer;
