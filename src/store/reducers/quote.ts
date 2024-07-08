import { createSlice } from '@reduxjs/toolkit';
import { fetchQuotesThunk } from '../middlewares';

const initialState: Record<string, any> = {
    data: null,
    error: null,
    status: 'idle'
};

const alerts = createSlice({
    name: 'quotes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchQuotesThunk.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchQuotesThunk.fulfilled, (state, action) => {
                state.status = 'success';
                state.data = action.payload;
            })
            .addCase(fetchQuotesThunk.rejected, (state, action) => {
                state.status = 'error';
                state.error = action.error.message;
            });
    }
});

export default alerts.reducer;