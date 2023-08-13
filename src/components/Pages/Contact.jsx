import React, { useState } from 'react'
import NavBar from './NavBar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import instance from '../services/instance'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


function Contact() {

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[phone,setPhone]=useState('');
  const[message,setMessage]=useState('');
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');

  const formStyles = {
    background: "whitesmoke",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    width: "45rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
  };

  const handleCreate =(event) =>
  {
    event.preventDefault();
    if(name !='' && email !='' && phone !='' && message!='')
    {
      createContact({name,email,phone,message}) 
    }
    else{
      setMsgg("Please fill the details")
    } 
  }

  const createContact = async(details)=>{
    try{
      const response = await instance.authInstance.post('/contact',details);
      console.log('Created successful!');
      setMsg('Our team will get in touch with you soon!!')
      setMsgg('')
      navigate('/')
    }
    catch(error)
    {
      console.log("Error in creating contact "+error)
      setMsgg("Please fill all the fields to add new contact");
    }

  }

  return (
    <>
      <div className="mx-auto col-10 col-md-8 col-lg-4 mt-4" style={formStyles}>
            <Form onSubmit={handleCreate}>
              <div>
                <h4 style={{ textAlign: "center" }}>Drop Us a Message</h4>
                <br/>
              </div>

                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Name</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={name}
                      onChange={(event) => setName(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Email</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={email}
                      onChange={(event) => setEmail(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Phone</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={phone}
                      onChange={(event) => setPhone(event.target.value) }
                    />
                </InputGroup>
                <br/>
               
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Message</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={message}
                      onChange={(event) => setMessage(event.target.value) }
                    />       
                </InputGroup>
                
                <br/>
                <p style={{ color: "green" }}>{msg}</p>
                <p style={{ color: "red" }}>{msgg}</p>
                
                <br/>

                <div className="text-center">
                 
                  <Button variant="primary" type="submit">
                       Create
                    </Button>
                 
                  <Button variant="primary"
                     onClick={() => {
                      navigate('/')
                          console.log("Cancelled")
                      }}>
                       Cancel
                    </Button>
                       
                    </div>
              </Form>           
        </div>

    </>
   
  )
}

export default Contact