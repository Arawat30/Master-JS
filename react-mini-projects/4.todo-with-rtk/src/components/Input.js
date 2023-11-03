import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function Input({ input, setInput }) {
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        value={input}
        placeholder="Add to do task..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button>Add Todo</button>
    </form>
  );
}
