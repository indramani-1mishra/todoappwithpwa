import { createSlice } from "@reduxjs/toolkit";

let initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const { todo } = action.payload;
      state.push({ id: Date.now().toString(), todotext: todo });
    },
    removeTodo: (state, action) => {
      const { id } = action.payload;
      return state.filter((item) => item.id !== id);
    },
  },
});

export const { addtodo, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
