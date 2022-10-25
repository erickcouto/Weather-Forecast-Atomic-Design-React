import { createSlice } from "@reduxjs/toolkit";
import { getRegions } from "./service";

const initialState = {
  error: false,
  regions: [
    {
      idRegiao: 0,
      idAreaAviso: "teste",
      globalIdLocal: 0,
      idConcelho: 0,
      latitude: "",
      idDistrito: 0,
      local: "",
      longitude: "",
    },
  ],
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
      .addCase(getRegions.rejected, (state, action) => {
        return {
          ...state,
          error: true,
        };
      });
  },
});

export const { setSelectedRegion } = regionsSlice.actions;

export default regionsSlice.reducer;
