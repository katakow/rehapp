/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "vaccineDate",
  initialState: { value: { covidVaccine: "", vaccineName: "" } },
  reducers: {
    vaccine: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { vaccine } = userSlice.actions;
export default userSlice.reducer;
