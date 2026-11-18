import { createSlice } from "@reduxjs/toolkit";

export const countslice = createSlice({
  name: "count",
  initialState: {
    count: 0,
  },
  reducers: {
    increament: (state) => {
      state.count += 1;
    },
    decreament: (state) => {
      if (state.count <= 0) {
        state.count = 0;
      } else {
        state.count -= 1;
      }
    },
    increasebyvalue: (state, action) => {
      state.count += action.payload;
    },
  },
});

export default countslice.reducer;
export const { increament, decreament, increasebyvalue } = countslice.actions;
