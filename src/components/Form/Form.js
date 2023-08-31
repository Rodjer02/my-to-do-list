import Input from "../Input/Input";
import Button from "../button/Button";

function Form({ placeholder, value, onClick, inputValue, setInputValue }) {
  return (
    <>
      <Input
        value={inputValue}
        placeholder={placeholder}
        setInputValue={setInputValue}
      />
      <Button value={value} onClick={onClick} />
    </>
  );
}

export default Form;
