import { createSlice } from "@reduxjs/toolkit";

export const filterStateSlice = createSlice({
  name: "filterState",
  initialState: {value : 'all'},
  reducers: {
    filterState: (state, action) => state = action.payload
  }
});

export const { filterState } = filterStateSlice.actions;

export default filterStateSlice.reducer;