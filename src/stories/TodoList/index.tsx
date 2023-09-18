import { useState } from "react";

import Input from "./Input";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [value, setValue] = useState<string>("");

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      setTodos((prev) => [...prev, value]);
      setValue("");
    }
  };

  return (
    <main>
      <Input setValue={setValue} value={value} handleKeyPress={handleKeyPress} />
      {todos.map((todo, index) => {
        return <Todo text={todo} key={index} />;
      })}
    </main>
  );
};

export default TodoList;
