import React,{useState,useRef,useEffect} from 'react'
import { PageWrapper } from '../components/styles/PageWrapper'


//components 
import Title from '../components/Utilities/Title'
import FormGroup from '../components/Utilities/FormGroup'
import Button from '../components/Utilities/Button'
import Modal from '../components/Utilities/Modal'
import Card from '../components/Utilities/Card'

//icons
import { MdSend } from "react-icons/md";
import Footer from '../pages/Footer'
const Contact = () => {

  //ref
  const nameRef=useRef();

 //states
 const [contactDetails,setContactDetails]=useState({
  name:"",
  email:"",
  textMessage:""
})

const [message,setMessage]=useState({
  error: false,
  errorMessage:"",
  success: false,
  text: "Message sent successfully",
 });


//handlers
const handleInputChange=(e)=>{
const {name,value}=e.target;
setContactDetails({...contactDetails,[name]:value})
}

const handleSubmit=(e)=>{
  e.preventDefault();
  //validation
  formValdation();
  resetForm();
}

function formValdation(){ 
  if(contactDetails.name.length<4){
  setMessage({
    error: true,
    errorMessage: "Name must be at least 4 characters long",
    success: false,
  });
   return;
  }

  if(!contactDetails.email.includes("@" && ".")){
    setMessage({
      error: true,
      errorMessage: "email must include '@' and '.'",
      success: false,
    });
    return;
    }
    if (!contactDetails.textMessage.trim() || contactDetails.textMessage.length < 10) {
      setMessage({
        error: true,
        errorMessage: contactDetails.textMessage 
          ? "Text message must be at least 10 characters long"
          : "Text message cannot be empty",
        success: false
      });
      return;
    }
    
    setMessage({
      success: true,
      text: "Message sent successfully"

    })
}

function resetForm(){
  setContactDetails({
    name:"",
    email:"",
    textMessage:""
  })
}
 

  useEffect(()=>{
 nameRef.current.focus();
  },[]);
  return (
    <PageWrapper className="animate-left">
      <Title text='Contact Us...'/>
      <form>
      <FormGroup
        label={"Name:"} 
        name={"name"} 
        value={contactDetails.name}
        reference={nameRef} 
        onChange={handleInputChange}       
        />
        <FormGroup
        label={"Email:"} 
        name={"email"}
        type={"email"} 
        value={contactDetails.email}   
        onChange={handleInputChange}      
        />

        <textarea 
        name='textMessage'
        
        style={{
          display: "block",
          width: "100%",
          padding: 10,
          marginBottom: 15,
           }}   
        placeholder='Message'
        type={"email"} 
        value={contactDetails.textMessage}   
        onChange={handleInputChange}      
        />
        <Button 
        classes={"btn-accept btn-block"}
        text="send"
        type={"submit"}
        onClick={handleSubmit}
        icon_back={<MdSend  size={15} style={{margin:2,display:"inline-block", justifyContent:"center"}}/>}
        />
      </form>
      {message.error && (
      <Modal 
      title='Vaidation Error'
      text={message.errorMessage}
      cancelEvent={()=> setMessage({error:false})}
      />)}
      {message.success && 
      <Card title='Thank You!' text={message.text}
      btnText={"close"} startEvent={()=>setMessage({message:false})}/>}
      <Footer/>
    </PageWrapper>
  )
}

export default Contact
