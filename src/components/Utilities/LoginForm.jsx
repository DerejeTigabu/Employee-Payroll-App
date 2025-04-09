import React,{useRef,useEffect, useState, useContext} from 'react'
import FormGroup from '../Utilities/FormGroup'
import Button from '../Utilities/Button'

//context
import { AuthenticationContext } from '../../context/AuthenticationContext'
const LoginForm = () => {
//referance 
  const emailRef=useRef();
  //states
  const [auth,setAuth]=useState({
    email: "",
    password:""
  })

  //context 
  const authenticator=useContext(AuthenticationContext);

  function handleInput(e){
    const {name,value}=e.target;
    setAuth({...auth,[name]:value})
  }

  function clearForm(){
    setAuth({
    email: "",
    password:""
    })
  }
  const handleLogin=(e)=>{
  e.preventDefault();
  authenticator.login(auth.email,auth.password);
  clearForm();
  }

  useEffect(()=>{
    emailRef.current.focus();
  },[]);

  return (
<div className="form">
  <h2 className="mb-2">Enter Your Credential</h2>
 <form>
<FormGroup
label={"Email"}
type={"email"}
name={"email"}
value={auth.email}
placeholder={"Enter your email"}
reference={emailRef}
onChange={handleInput}
/>{" "}

<FormGroup
label={"Password"}
type={"password"}
name={"password"}
value={auth.password}
placeholder={"Enter your password"}
onChange={handleInput}
/>{" "}
<Button 
classes={"btn-accept btn-block"}
type={"submit"} 
text={"login"}
onClick={handleLogin}
/>



 </form>



</div>
  )
}

export default LoginForm
