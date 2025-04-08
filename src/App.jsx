import { useState } from 'react'

import './App.css'
import Title from './components/Utilities/Title'
import Button from './components/Utilities/Button'
import Modal from './components/Utilities/Modal'
import Card from './components/Utilities/Card'
import FormGroup from './components/Utilities/FormGroup'

function App() {
 

  return ( 
   <div>
  
    <Title/>
    <Button text={"Employee"} />
    <Modal/>
    <Card/>
    <FormGroup label={"Full name"}/>
    
    
   </div>
  )
}

export default App
