import React from "react";

const Button = ({style, children}) => {
  return (
      <button className={`${style} border border-blue-800 rounded py-1 px-5 hover:scale-105 hover:-translate-y-1 duration-150 hover:shadow-xl`}>{children}</button>
  )
}

export default Button;