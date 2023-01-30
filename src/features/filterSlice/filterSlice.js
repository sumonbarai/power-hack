import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sliceStart: 0,
  sliceEnd: 10,
  pageNumber: 0,
  totalNumberOfBills: 0,
  name: "",
  email: "",
  phone: "",
};

const filterSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    nextPage: (state, action) => {
      state.pageNumber = action.payload;
      state.sliceStart = 10 * state.pageNumber + 1 - 1;
      state.sliceEnd = 10 * (state.pageNumber + 1);
    },
    totalNumberOfBills: (state, action) => {
      state.totalNumberOfBills = action.payload;
    },
    fillterByNameAction: (state, action) => {
      state.name = action.payload;
      state.email = "";
      state.phone = "";
      state.pageNumber = 0;
      state.sliceStart = 10 * state.pageNumber + 1 - 1;
      state.sliceEnd = 10 * (state.pageNumber + 1);
    },
    fillterByEmailAction: (state, action) => {
      state.email = action.payload;
      state.name = "";
      state.phone = "";
      state.pageNumber = 0;
      state.sliceStart = 10 * state.pageNumber + 1 - 1;
      state.sliceEnd = 10 * (state.pageNumber + 1);
    },
    fillterByPhoneAction: (state, action) => {
      state.phone = action.payload;
      state.email = "";
      state.name = "";
      state.pageNumber = 0;
      state.sliceStart = 10 * state.pageNumber + 1 - 1;
      state.sliceEnd = 10 * (state.pageNumber + 1);
    },
  },
});
export default filterSlice.reducer;
export const {
  nextPage,
  totalNumberOfBills,
  fillterByPhoneAction,
  fillterByEmailAction,
  fillterByNameAction,
} = filterSlice.actions;
