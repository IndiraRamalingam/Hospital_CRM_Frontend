import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../services/instance'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AdminSiginIn() {
 const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[msg,setMsg]=useState('');
  const navigate=useNavigate();

  const handleSignin =(event) =>
  {
    event.preventDefault();
    signin({email,password})  
  }

  const signin = async({email,password})=>{
    if(email!="" && password!="")
    {
      try
      {  
          const response = await instance.authInstance.post('/admin/signin',{email,password});
          console.log('login successful!');
          sessionStorage.setItem("token", response.data.token)
          console.log("TOKEN __> "+response.data.token);
          if (response.status === 200) {
            try{
             
              navigate('/adminDashboard')
          }
          catch(error)
      {
          console.log("Error in fetching patient  ", error)
      }        
          }   
      }
      catch(error)
      {   
          setMsg("Invalid Email/Password");
      }     
    }
    else
    {
        if(email=="" && password==""){
          setMsg("Please enter your Email and password")
        }else if(email==""){
          setMsg("Email is required")
        }else{
          setMsg("Password cannot be empty")
        }
    }  
  }

  const formStyles = {
    background: "whitesmoke",
    boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37)",
    width: "28rem",
    padding: "2rem",
    borderRadius: "1rem",
    margin: "0rem 1.5rem",
  };

    return (
      <>
        <div className="mx-auto col-10 col-md-8 col-lg-4 mt-5" style={formStyles}>
            <Form onSubmit={handleSignin}>
              <div>
                <h4 style={{ textAlign: "center" }}>ADMIN LOGIN</h4>
                <br/>
              </div>
                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type="email" 
                    placeholder="Email ID"
                    value={email}
                    onChange={(event) => setEmail(event.target.value) }
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Control 
                    size="lg"
                    type='password'
                    value={password}
                    placeholder='Password'
                    onChange={(event) => setPassword(event.target.value) }
                    />
                </Form.Group>
                
                <p style={{ color: "red" }}>{msg}</p>

                <div className="text-center">
                    <Button variant="primary" type="submit">
                       LogIn
                    </Button>
                </div>
              </Form>           
        </div>
      </>
    )

}

export default AdminSiginIn