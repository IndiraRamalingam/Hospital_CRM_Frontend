import React,{ useEffect, useState } from 'react'
import instance from '../services/instance';
import { Link, useParams,useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import SideBar from '../Pages/SideBar';

function CreateDoctor() {

  const navigate=useNavigate();
  const[name,setName]=useState('');
  const[password,setPassword]=useState('');
  const[confirmpassword,setConfirmpassword]=useState('');
  const[email,setEmail]=useState('');
  const[specialist,setSpecialist]=useState('');
  const[fee,setFee]=useState('');
  const[msg,setMsg]=useState('');
  const[msgg,setMsgg]=useState('');
  const[infor,setInfor]=useState('');
  

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
      if(password == confirmpassword)
      {
        createDoctor({name,password,email,specialist,fee}) 
      }
      else{
        setMsgg("Password is not matching")
      }
      
    }
  
    const createDoctor = async(details)=>{
      try{
        const response = await instance.protectedInstance.post('/admin/addDoctor',details);
        console.log('Created successful!');
        setMsg('New Doctor Added Succesfully')
        setMsgg('')
        setInfor("Back to Dashboard")
      }
      catch(error)
      {
        console.log("Error in creating doctor "+error)
        setMsgg("Please fill all the fields to add new doctor");
      }
  
    }

  return (
    <div id="page-top">
        <div id="wrapper">
        <SideBar/>
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
      
            <div className="mx-auto col-10 col-md-8 col-lg-4 mt-4" style={formStyles}>
            <Form onSubmit={handleCreate}>
              <div>
                <h4 style={{ textAlign: "center" }}>Add New Doctor</h4>
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
                  <InputGroup.Text id="inputGroup-sizing-lg">Password</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={password}
                      onChange={(event) => setPassword(event.target.value) }
                    />
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Confirm Password</InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      value={confirmpassword}
                      onChange={(event) => setConfirmpassword(event.target.value) }
                    />
                </InputGroup>
                <br/>
               
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Specialist</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={specialist}
                      onChange={(event) => setSpecialist(event.target.value) }
                    />       
                </InputGroup>
                <br/>
                <InputGroup size="lg">
                  <InputGroup.Text id="inputGroup-sizing-lg">Fee</InputGroup.Text>             
                    <Form.Control 
                      aria-label="Large"
                      as="textarea"                     
                      value={fee}
                      onChange={(event) => setFee(event.target.value) }
                    />       
                </InputGroup>
                
                <br/>
                <p style={{ color: "green" }}>{msg}<Link to="/viewAllPatients">{infor}</Link></p>
                <p style={{ color: "red" }}>{msgg}</p>
                
                <br/>

                <div className="text-center">
                 
                  <Button variant="primary" type="submit">
                       Add Doctor
                    </Button>
                 
                  <Button variant="primary"
                     onClick={() => {
                      navigate('/adminDashboard')
                          console.log("Cancelled")
                      }}>
                       Cancel
                    </Button>
                       
                    </div>
              </Form>           
        </div>



            </div>
            <a className="backtotop" href="#page-top">
              <i className="fas fa-angle-up"></i>
            </a>        
          </div>
        </div>
      </div>
  )
}

export default CreateDoctor