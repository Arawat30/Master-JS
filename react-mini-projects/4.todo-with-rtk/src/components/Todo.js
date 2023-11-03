import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../features/todo/todoSlice";

export default function Todo({ setInput }) {
  const todoList = useSelector((state) => state.todo.todoList);
  console.log(todoList);
  const dispatch = useDispatch();

  return (
    <>
      {todoList.map((todoElement) => (
        <li key={todoElement.id}>
          <span>{todoElement.value}</span>
          <button
            onClick={() => {
              dispatch(deleteTodo(todoElement.id));
            }}
          >
            delete
          </button>
          <button
            onClick={() => {
              dispatch(deleteTodo(todoElement.id));
              setInput(todoElement.value);
            }}
          >
            update
          </button>
        </li>
      ))}
    </>
  );
}
