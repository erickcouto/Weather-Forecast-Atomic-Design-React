import { createSlice } from "@reduxjs/toolkit";
import { getForecasts } from "./service";
const maxDays = 5;
const initialState = {
  error: false,
  forecasts: [],
};

export const forecastSlice = createSlice({
  name: "forecasts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getForecasts.fulfilled, (state, action) => {
        return {
          ...state,
          forecasts: action.payload.data.slice(0, maxDays),
          error: false,
        };
      })
      .addCase(getForecasts.rejected, (state) => {
        return {
          ...state,
          error: true,
        };
      });
  },
});

export const { increment, decrement, incrementByAmount } =
  forecastSlice.actions;

export default forecastSlice.reducer;
