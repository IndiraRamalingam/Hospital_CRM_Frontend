import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import instance from '../services/instance'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import patient from "../../assets/patientSignIn.png"

function PatientSignIn() {
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
          const response = await instance.authInstance.post('/patient/signin',{email,password});
          sessionStorage.setItem("token", response.data.token)
          if (response.status === 200) {
            try{
              const response = await instance.protectedInstance.get('/patient');
              const res=response.data;
              const params_id=res.patient_ID;
              navigate(`/patientDashboard/${params_id}`)
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

    return (
    <>
      <section className="h-100 gradBG">
        <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col ">
        <div className="card card-registration my-4">
        <div className="row g-0  ">
        <div className="col-xl-6  d-xl-block">
          <img src={patient}
            alt="Sample photo" className="img-fluid"
            style={{'borderTopLeftRadius': ".25rem", 'borderBottomLeftRadius': '.25rem','height':'500px'}}/>
        </div>
        <div className="col-xl-6">
        <Form onSubmit={handleSignin}>
          <div className="card-body p-md-5 text-black">
            <h3 className="mb-5 text-uppercase" style={{color:"#301091",'fontWeight':'bolder','textAlign':'center'}}>Sign In</h3>
              
            <div className="form-outline mb-4">
              <input type="email" className="form-control form-control-lg" 
              placeholder="Email ID"
              value={email}
              onChange={(event) => setEmail(event.target.value) }/>
            </div>

            <div className="form-outline mb-4">
              <input type="text" className="form-control form-control-lg" 
              placeholder='Password'
                  value={password}
                  onChange={(event) => setPassword(event.target.value) }/>
            </div>
            
            <div>
            <p style={{ color: "red" }}>{msg}</p>
            </div>

            <div className="d-flex justify-content-center pt-3 w-100">
              <button type="Submit" className="btn btn-primary btn-lg ">
              SIGN IN</button>             
            </div>
       
              <div className="align-items-center my-3">
            <p className="text-center fw-bold mx-3 mb-0">OR</p>
          </div>
            <div className="d-flex justify-content-center pt-2 w-100">          
            <p className=" justify-content-center">New Patient? 
              <Link to='/createPatient'>   Click to Register </Link>  </p>           
            </div>
          </div>
          </Form>
        </div>
        </div>
        </div>
        </div>
        </div>
        </div>
      </section>
    </>


    )
}

export default PatientSignIn