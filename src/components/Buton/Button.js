function Button({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "30px",
        width: "20%",
        backgroundColor: "blueviolet",
        outline: "none",
        border: "none",
      }}
    >
      {value}
    </button>
  );
}

export default Button;
