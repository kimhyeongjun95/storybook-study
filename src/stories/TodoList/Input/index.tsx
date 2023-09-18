import "./index.scss";

export interface InputProps {
  setValue: (e: string) => void;
  handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  value: string;
}

const Input = ({ setValue, handleKeyPress, value }: InputProps) => {
  return (
    <>
      <input
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
        value={value}
      />
    </>
  );
};

export default Input;
