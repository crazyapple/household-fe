import type { RootState } from "../../store/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value++;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const counterActions = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter.value;

export const counter = counterSlice.reducer;
