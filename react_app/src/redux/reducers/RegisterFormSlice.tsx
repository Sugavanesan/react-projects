// src/features/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';
type initialStateType = {
    name: string,
    fatherName: string,
    degree: string
}
const initialState: initialStateType = {
    name: '',
    fatherName: '',
    degree: '',
}
const counterSlice = createSlice({
    name: 'counter',
    initialState: initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
        setFatherName: (state, action) => {
            state.fatherName = action.payload;
        },
        setDegree: (state, action) => {
            state.degree = action.payload;
        },
    },
});

export const registerFormSliceActions = counterSlice.actions;
export const registerFormReducer = counterSlice.reducer;
