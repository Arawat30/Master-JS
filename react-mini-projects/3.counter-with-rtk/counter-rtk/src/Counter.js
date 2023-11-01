import { useDispatch, useSelector } from "react-redux";
import { increment, decrement,incrementByAmount } from "./features/counterSlice";

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);
  return (
    <>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <span>{count}</span>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementByAmount(5));
        }}
      >
        increment By Amount:5
      </button>
    </>
  );
}

export default Counter;
