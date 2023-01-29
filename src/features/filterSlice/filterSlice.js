import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  sliceStart: 0,
  sliceEnd: 10,
  pageNumber: 0,
  totalNumberOfBills: 0,
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
  },
});
export default filterSlice.reducer;
export const { nextPage, totalNumberOfBills } = filterSlice.actions;
