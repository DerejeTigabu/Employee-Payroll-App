import React, { useContext } from 'react'
import { PageWrapper } from '../components/styles/PageWrapper'
import LoginForm from '../components/Utilities/LoginForm'
import Title from '../components/Utilities/Title'
import Footer from '../pages/Footer'

//context
import { AuthenticationContext } from '../context/AuthenticationContext'
import Button from '../components/Utilities/Button'
const Home = () => {

  const authenticator=useContext(AuthenticationContext)
  return (
    <PageWrapper className='animate-left'>
      <Title text='Welcome'/>
       {!authenticator.isAuthenticated ? <LoginForm/>
        : (
       <Button 
       onClick={authenticator.logout} 
       text={"logout"}
       classes="btn-accept btn-block"
       />)}
        <Footer/>
 </PageWrapper>
  )
}

export default Home
