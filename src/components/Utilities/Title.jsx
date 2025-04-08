import React from 'react'

const Title = ({
  text="Title",
  classes=""
}) => {
  return (
    <div className={`title text-center ${classes}`}>
      <h4>{text}</h4>
    </div>
  )
}

export default Title
