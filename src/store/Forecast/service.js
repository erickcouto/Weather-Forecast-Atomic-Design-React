import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../../constants";

export const getForecasts = createAsyncThunk("forecasts", async (id) => {
  const response = await fetch(
    `${BASE_URL}forecast/meteorology/cities/daily/${id}.json`
  );
  const data = await response.json();
  return data;
});
