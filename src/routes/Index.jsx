import React from 'react'
import Title from '../components/Utilities/Title'

const Index = ({


}) => {
  return (
  <div className="container animate-left text-center"> 
    <Title text='Welcome to....'/>
     <h3 className="subtitle ">Employee-payroll</h3>
      <p>check our <br/>
      <a
      href='https://github.com/DerejeTigabu/E-commerce'  
       target="_blank"
       className="text-primary mr-1"
      >
        {" "}
        GitHub repo to see the source code.  <br/>
        </a>
      Learn more about the app here.  
       
      </p>
  </div>
  )
}

export default Index
