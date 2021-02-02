import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice: any = createSlice({
  name: "toolkit",
  initialState: {
    todos: ["1", "2", "3"],
    count: 1,
  },
  reducers: {
    addTodo(state:any, action: any):void {
      state.todos.push(action.payload);
    },
    removeLastTodo(state: any):void {
      state.todos.pop();
    },
    countPlus(state: any):void {
        state.count++;
      },
  },
});

export default toolkitSlice.reducer;
export const {addTodo, removeLastTodo, countPlus} = toolkitSlice.actions;
