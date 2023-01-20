import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state,action) => {
      state.value = state.value + 1;
    },
    decrement: (state,action) => {
      state.value -= 1;
    }
  },
});

export const {increment,decrement} = counterSlice.actions;

export default counterSlice.reducer