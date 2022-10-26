import { createSlice } from "@reduxjs/toolkit";
import { getRegions } from "./service";

const initialState = {
  error: false,
  regions: [],
  selectedRegion: null,
};

export const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {
    setSelectedRegion: (state, action) => {
      state.selectedRegion = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRegions.fulfilled, (state, action) => {
        return {
          ...state,
          regions: action.payload.data,
          error: false,
        };
      })
      .addCase(getRegions.rejected, (state) => {
        return {
          ...state,
          error: true,
        };
      });
  },
});

export const { setSelectedRegion } = regionsSlice.actions;

export default regionsSlice.reducer;
