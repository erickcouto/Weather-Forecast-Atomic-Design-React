import { createSlice } from "@reduxjs/toolkit";
import { getForecasts } from "./service";
const maxDays = 5;
const initialState = {
  error: false,
  forecasts: [
    {
      precipitaProb: "",
      tMin: "",
      tMax: "",
      predWindDir: "",
      idWeatherType: 0,
      classWindSpeed: 1,
      longitude: "",
      forecastDate: "",
      classPrecInt: 0,
      latitude: "",
    },
  ],
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
      .addCase(getForecasts.rejected, (state, action) => {
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
