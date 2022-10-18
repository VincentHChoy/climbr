function Button({ style, type = 'tooltip', handleClick, text }) {

  return (
    <button style={style} type={type} className="text-primary border-2 border-primary rounded-md py-5 px-10 hover:bg-primary hover:text-white" onClick={handleClick}>{text}</button>
  )
}

export default Button