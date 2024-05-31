import { createSlice } from '@reduxjs/toolkit';

export const dishesSlice = createSlice ({
    name: 'dishes',
    initialState: {
        selectedCatrgory: 'SEAFOOD'
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCatrgory = action.payload;
        }
    }
})
export const getSelectedCategory = state => state.dishes.selectedCatrgory;
export const { filterCategory } = dishesSlice.actions;
export default dishesSlice.reducer;