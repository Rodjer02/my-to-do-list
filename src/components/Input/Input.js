function Input({ placeholder, value, setInputValue }) {
  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };
  return (
    <input
      value={value}
      style={{ height: "30px", width: "80%", paddingLeft: "10px" }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default Input;
