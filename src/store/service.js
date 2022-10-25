import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants";

export const getRegions = createAsyncThunk("regions", async () => {
  const response = await fetch(`${BASE_URL}distrits-islands.json`);
  const data = await response.json();
  return data;
});

export const getForecasts = createAsyncThunk("forecasts", async (id) => {
  const response = await fetch(
    `${BASE_URL}forecast/meteorology/cities/daily/${id}.json`
  );
  const data = await response.json();
  return data;
});
