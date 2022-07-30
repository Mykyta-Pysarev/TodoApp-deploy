import { createSlice } from "@reduxjs/toolkit";

export const counterAddSlice = createSlice({
  name: "counterAdd",
  initialState: {value : 0,},
  reducers: {
    counterAddInc: (state, action) => {state.value += action.payload}
  }
});

export const { counterAddInc } = counterAddSlice.actions;

export default counterAddSlice.reducer;