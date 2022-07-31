import { createSlice } from "@reduxjs/toolkit";

export const counterAddSlice = createSlice({
  name: "counters",
  initialState: { add: 0, delete: 0, edit: 0 },
  reducers: {
    counterAddInc: (state, action) => {
      state.add += action.payload;
    },
    counterEditInc: (state, action) => {
      state.edit += action.payload;
    },
    counterDeleteInc: (state, action) => {
      state.delete += action.payload;
    },
  },
});

export const { counterAddInc, counterEditInc, counterDeleteInc } =
  counterAddSlice.actions;

export default counterAddSlice.reducer;
