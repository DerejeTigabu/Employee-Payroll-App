import React from 'react'

const Title = ({
  text="Title",
  classes=""
}) => {
  return (
    <div className={`title text-center ${classes}`}>
      {text}
    </div>
  )
}

export default Title
