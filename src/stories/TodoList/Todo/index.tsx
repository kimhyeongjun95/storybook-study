import { useState } from "react";

export interface TodoProps {
  text?: string;
  id: number;
  handleEditValue: (id: number, value: string) => void;
  handleDelete: (id: number) => void;
}

const Todo = ({ text, id, handleEditValue, handleDelete }: TodoProps) => {
  const [value, setValue] = useState<string>('');
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEdit(true);
  }

  const handleKeyPress = (id: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing) {
      handleEditValue(id, value);
      setValue("");
      setIsEdit(false)
    }
  };

  return (
      <li key={id}>
        <>
          {isEdit 
            ?
            <input value={value} onChange={e => setValue(e.target.value)} onKeyDown={(e) => handleKeyPress(id, e)}/>
            :
            <span>{text}</span>
          } 
            <button style={{ marginLeft: '5px' }}onClick={handleEdit}>수정</button>
            <button style={{ marginLeft: '5px' }}onClick={() => handleDelete(id)}>삭제</button>
        </>
      </li>
  )
};

export default Todo;
