/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: {
      name: "",
      surname: "",
      email: "",
      pesel: "",
      height: 0,
      weight: 0,
      gender: "",
      diseases: "",
      vaccines: "",
      alergies: "",
      diet: "",
      covidTest: false,
      symtopms: "",
      covid: "",
      drugs: "",
      covidVaccine: true,
      vaccineName: "",
    },
  },
  reducers: {
    register: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
