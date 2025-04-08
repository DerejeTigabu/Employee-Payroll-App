import React from 'react'
import Title from '../components/Utilities/Title'
import { PageWrapper } from '../components/styles/PageWrapper'

const Index = ({


}) => {
  return (
  //<div className="container animate-left text-center"> 
    <PageWrapper className="animate-left">
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
  </PageWrapper>
  )
}

export default Index
