import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API'den hero kartlarını asenkron olarak çekmek için createAsyncThunk kullanıyoruz
export const fetchHeroCards = createAsyncThunk('hero/fetchHeroCards', async () => {
    const response = await axios.get('http://localhost:1337/api/hero-cards?populate=*');
    return response.data.data;
});

const heroSlice = createSlice({
    name: 'hero',
    initialState: {
        heroCards: [],
        status: 'idle', // idle, loading, succeeded, failed
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeroCards.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchHeroCards.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.heroCards = action.payload;
            })
            .addCase(fetchHeroCards.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    },
});

export default heroSlice.reducer;
