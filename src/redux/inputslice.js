import { createSlice } from "@reduxjs/toolkit";

const initialState = ""; 

const inputSlice = createSlice({
  name: "inputslice",
  initialState,
  reducers: {
    setvalue: (state, action) => {
      return action.payload; 
    },
    setnullvalue: () => {
      return ""; 
    },
  },
});

export const { setvalue, setnullvalue } = inputSlice.actions;
export default inputSlice.reducer;
