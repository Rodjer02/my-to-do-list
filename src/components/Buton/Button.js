function Button({ value, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        height: "30px",
        width: "20%",
        outline: "none",
        border: "none",
        style: "blueviolet",
      }}
    >
      {value}
    </button>
  );
}

export default Button;
