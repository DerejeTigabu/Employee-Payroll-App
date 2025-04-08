import React, { Children } from 'react'
import Button from './Button'

const Card = (
    {
        title="Title",
        text="Text",
        Children,
        icon_1,
        icon_2,
        icon_3,
        btnIcon,
        startEvent,
        cardHeader = true,
        cardFooter = true,
        cardBody = true,
        btnText
    }
) => {
  return (
   <div className="card" style={{width: 400}}>
    {cardHeader && ( <div className='card-header'>
        {icon_1}
        {icon_2}
        {icon_3}
     </div>
        )}
        <div className="card-body">       
     <h3 className="card-title">{title}</h3>
     <div className="card-text">
        {text}
        {Children}  
     </div>
     </div>
     {cardFooter && (  <div className="card-footer">
       <Button classes={"btn-accept"} onClick={startEvent}
       text={[btnText]}/>
     </div>
        )}
   

   
   </div>
  )
}

export default Card
