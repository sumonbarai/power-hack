import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  billingId: "",
  name: "",
  email: "",
  phone: "",
  amount: "",
};

const demoSlice = createSlice({
  name: "demo",
  initialState,
  reducers: {
    addDemo: (state, action) => {
      state.billingId = "Loading...";
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.phone = action.payload.phone;
      state.amount = action.payload.amount;
    },
    removeDemo: (state, action) => {
      state.billingId = "";
      state.name = "";
      state.email = "";
      state.phone = "";
      state.amount = "";
    },
  },
});
export default demoSlice.reducer;
export const { addDemo, removeDemo } = demoSlice.actions;
