import React from 'react'

const Button = ({
    text,
    classes,
    type,
    onClick,
    style,   
    icon_front,
    icon_back,
   
}) => {
  return (
    <>
    <button 
    className={`btn ${classes}`} 
    type={type} onClick={onClick} 
    style={style}>
       <div>
      {icon_front} {text}  {icon_back}
    </div>
        </button>
   
    </>
  )
}

export default Button
