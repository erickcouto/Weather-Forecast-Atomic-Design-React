import { configureStore } from "@reduxjs/toolkit";
import regionsReducer from "./regionsSlice";
import forecastsReducer from "./forecastsSlice";

export const store = configureStore({
  reducer: {
    regions: regionsReducer,
    forecasts: forecastsReducer,
  },
});
