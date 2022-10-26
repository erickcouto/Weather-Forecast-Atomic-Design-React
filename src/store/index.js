import { configureStore } from "@reduxjs/toolkit";
import regionsReducer from "./Region/slice";
import forecastsReducer from "./Forecast/slice";

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
    forecasts: forecastsReducer,
  },
});
