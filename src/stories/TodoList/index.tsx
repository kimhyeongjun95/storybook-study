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
  
  const handleDelete = (id: number) => {
    setTodos((prev) => {
      const newTodos = [...prev]
      newTodos.splice(id, 1)
      return newTodos
    })
  }

  const handleEditValue = (id: number, value: string) => {
    setTodos((prev) => {
      const newTodos = [...prev]
      newTodos.splice(id, 1, value)
      return newTodos
    })
  }

  return (
    <main>
      <Input setValue={setValue} value={value} handleKeyPress={handleKeyPress} />
      {todos.map((todo, index) => {
        return <Todo text={todo} key={index} id={index} handleDelete={handleDelete} handleEditValue={handleEditValue}/>;
      })}
    </main>
  );
};

export default TodoList;
