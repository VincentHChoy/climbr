function Button({ style, type = "tooltip", handleClick, text,color }) {
  return (
    <button
      style={style}
      type={type}
      className={`text-primary border-2 border-primary rounded-md py-3 px-12 hover:bg-primary hover:text-white ${color}`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}

export default Button;
