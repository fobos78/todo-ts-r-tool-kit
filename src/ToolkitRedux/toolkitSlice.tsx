import { createSlice } from "@reduxjs/toolkit";

const toolkitSlice: any = createSlice({
  name: "toolkit",
  initialState: {
    todos: [],
    count: 1,
    setInput: [],
    dog: "",
  },
  reducers: {
    addTodo(state: any, action: any): void {
      state.todos.push(action.payload);
    },
    removeLastTodo(state: any): void {
      state.todos.pop();
    },
    countPlus(state: any): void {
      state.count++;
    },
    addDog(state: any, action: any): void {
      state.dog = action.payload;
    },
    addSetInput(state: any, action: any): void {
      state.setInput.push(action.payload);
    },
    changeSetInput(state: any, action: any): void {
      state.setInput.splice(action.payload.index,1,action.payload.value);
    },
  },
});

export default toolkitSlice.reducer;
export const {
  addTodo,
  removeLastTodo,
  countPlus,
  addDog,
  addSetInput,
  changeSetInput,
} = toolkitSlice.actions;
