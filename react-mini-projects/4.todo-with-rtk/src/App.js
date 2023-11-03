import { useState } from "react";
import Input from "./components/Input";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState("");

  return (
    <>
      <Input input={input} setInput={setInput} />
      <Todo  setInput={setInput}/>
    </>
  );
}

export default App;
