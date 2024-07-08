import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState: Record<string, any> = {
    category: null,
    defaultImages:
        [
            "https://cdn.midjourney.com/bfe339b7-8cd7-4aa9-8e19-5d87b5974682/0_2.webp",
            "https://cdn.midjourney.com/ef7bea32-a80f-433a-b02a-62351f80687e/0_3.webp",
            "https://cdn.midjourney.com/ef7bea32-a80f-433a-b02a-62351f80687e/0_2.webp",
            "https://cdn.midjourney.com/ef7bea32-a80f-433a-b02a-62351f80687e/0_1.webp",
            "https://cdn.midjourney.com/ef7bea32-a80f-433a-b02a-62351f80687e/0_0.webp",
            "https://cdn.midjourney.com/9d03935d-ae71-46d7-8463-41da55045b33/0_3.webp",
            "https://cdn.midjourney.com/9d03935d-ae71-46d7-8463-41da55045b33/0_2.webp",
            "https://cdn.midjourney.com/9d03935d-ae71-46d7-8463-41da55045b33/0_1.webp",
            "https://cdn.midjourney.com/9d03935d-ae71-46d7-8463-41da55045b33/0_0.webp",
            "https://cdn.midjourney.com/86dee8da-8fa2-4c29-8967-2fa90c5e90f4/0_0.webp",
            "https://cdn.midjourney.com/86dee8da-8fa2-4c29-8967-2fa90c5e90f4/0_1.webp",
            "https://cdn.midjourney.com/86dee8da-8fa2-4c29-8967-2fa90c5e90f4/0_2.webp",
            "https://cdn.midjourney.com/86dee8da-8fa2-4c29-8967-2fa90c5e90f4/0_3.webp"
        ]
};

const menu = createSlice({
    name: 'category',
    initialState,
    reducers: {
        setCategory(state, action) {
            const { payload } = action;
            state['category'] = payload;
        }
    }
});

export default menu.reducer;
export const { setCategory } = menu.actions;