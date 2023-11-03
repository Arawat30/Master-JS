import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todoList: [
    { id: nanoid(), value: "hello" },
    { id: nanoid(), value: "world" },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodo = {
        id: nanoid(),
        value: action.payload,
      };

      state.todoList.push(newTodo);
    },
    deleteTodo: (state, action) => {
      let newTodoList = state.todoList.filter(
        (todoElement) => action.payload !== todoElement.id
      );
      state.todoList = newTodoList;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
