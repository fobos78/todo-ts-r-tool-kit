import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice: any = createSlice({
  name: "toolkit",
  initialState: {
    todos: ["1", "2", "3"],
  },
  reducers: {
    addTodo(state:any, action: any):void {
      state.todos.push(action.payload);
    },
    removeLastTodo(state: any):void {
      state.todos.pop();
    },
  },
});

export default toolkitSlice.reducer;
export const {addTodo, removeLastTodo} = toolkitSlice.actions;
